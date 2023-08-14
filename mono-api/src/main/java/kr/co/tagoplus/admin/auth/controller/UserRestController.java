package kr.co.tagoplus.admin.auth.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import kr.co.tagoplus.auth.entity.Company;
import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.serializer.UserSerializer;
import kr.co.tagoplus.auth.service.CompanyService;
import kr.co.tagoplus.auth.service.UserService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.file.service.FileService;
import kr.co.tagoplus.form.UserForm;
import kr.co.tagoplus.form.UserPasswordChangeForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import reactor.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserRestController {
	//private static Logger logger = LoggerFactory.getLogger(AdminSecurityRestController.class);

	@Autowired
	private UserService userService;
	@Autowired
	private CompanyService companyService;

	@Autowired
	private FileService fileService;

	@GetMapping(value = "/api/users")
	public ResponseEntity<Object> getUserList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<User> users = userService.getPagedByFilter(params, pageable);

		return ResponseEntityUtil.list(users);
	}

	@GetMapping(value = "/api/users/list")
	public ResponseEntity<Object> getUserListWihtoutPaging(@RequestParam Map<String, Object> params) {
		List<User> users = userService.getList(params);
		return ResponseEntityUtil.success(users);
	}

	@GetMapping(value = "/api/user/info/list" , produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getUserInfoList(@RequestParam Map<String, Object> params, Pageable pageable) throws JsonProcessingException {
		Map<String, Object> result = new HashMap<>();
		try {
			Page<User> users = userService.getPagedByFilter(params, pageable);

			ObjectMapper mapper = new ObjectMapper();
			mapper.registerModule(new SimpleModule().addSerializer(User.class, new UserSerializer()));

			return new ResponseEntity<>(mapper.writeValueAsString(users), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", "failed.user.info.list");
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/api/users/{seq:\\d+}")
	public ResponseEntity<Object> getUserDetail(@PathVariable Long seq) {
		User user = userService.getById(seq);

		if (user != null) {
			Company company = companyService.getByUserSeq(seq);
			if(company != null){
				Map<String, Object> result = new HashMap<>();
				result.put("user", user);
				result.put("company", company);
				return ResponseEntityUtil.success(result);
			}
			return ResponseEntityUtil.success(user);
		}

		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/users/create")
	public ResponseEntity<Object> createUsers(AttachFile attachFile, UserForm userForm, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		if(userService.existByUsername(userForm.getUsername())) {
			return ResponseEntityUtil.error("error.duplicate.username");
		}

		User user = userForm.getUser(userForm);
		User retUser = userService.register(user);

		if (retUser != null){
			if("MT_02".equals(userForm.getMemberTypeCd())){
				Company company = userForm.getCompany(userForm);
				company.setUserSeq(user.getSeq());

				long fileGroupSeq;
				if(attachFile.getFile() != null) {
					fileGroupSeq = fileService.generateFileGroup();
					fileService.fileStore(attachFile.getFile(), "Company", fileGroupSeq);
					company.setFileGroupSeq(fileGroupSeq);
				}
				Company retCompany = companyService.register(company);
				if (retCompany != null){
					Map<String, Object> result = new HashMap<>();
					result.put("user", retUser);
					result.put("company", retCompany);
					return ResponseEntityUtil.success(result);
				}
				return ResponseEntityUtil.error("error.insert");
			}

			return ResponseEntityUtil.success(retUser);
		}

		return ResponseEntityUtil.error("error.insert");
	}

	@PostMapping(value = "/api/users/update")
	public ResponseEntity<Object> updateUsers(AttachFile attachFile, UserForm userForm, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		User user = userForm.getUser(userForm);
		int affactedRowsUser = userService.update(user);

		Company company = userForm.getCompany(userForm);
		int affactedRowsCompany = 0;

		if(!StringUtils.isEmpty(company.getSeq())){
			if(attachFile.getFile() != null) {
				if (Long.valueOf(userForm.getFileGroupSeq()) == null || userForm.getFileGroupSeq() == 0) {
					company.setFileGroupSeq(fileService.generateFileGroup());
				}
				else {
					fileService.deleteByFileGroup(company.getFileGroupSeq());
				}
				fileService.fileStore(attachFile.getFile(), "Company", company.getFileGroupSeq());
			}

			affactedRowsCompany = companyService.update(company);
			if (affactedRowsUser > 0 && affactedRowsCompany > 0) {
				Map<String, Object> result = new HashMap<>();
				result.put("user", user);
				result.put("company", company);
				return ResponseEntityUtil.success(result);
			}

			return ResponseEntityUtil.error("error.update");
		}

		if (affactedRowsUser > 0) {
			return ResponseEntityUtil.success(user);
		}

		return ResponseEntityUtil.error("error.update");
	}

	@PostMapping(value = "/api/users/delete/{seq}")
	public ResponseEntity<Object> deleteUsers(@PathVariable Long seq) {

		int affactedRows = userService.deleteById(seq);
		int affactedRowsCompany = companyService.deleteById(seq);

		if (affactedRows > 0)
			return ResponseEntityUtil.success(null);

		return ResponseEntityUtil.error("error.delete");
	}
	
	@PostMapping(value = "/api/users/userIdExist/{username}")
	public ResponseEntity<Object> userIdExist(@PathVariable String username) throws BindException {
		Boolean userExist =  userService.existByUsername(username);
		if(userExist)
			return ResponseEntityUtil.error("error.duplicate.username");
		return ResponseEntityUtil.success(null);
	}
	
	@PostMapping(value = "/api/users/changepassword")
    public ResponseEntity<Object> changePassword(UserPasswordChangeForm changePasswordForm, Authentication authentication) throws CustomResponseException {
        Map<String, Object> result = new HashMap<String, Object>();

        try {
            userService.changePassword(changePasswordForm);
            result.put("status", "success");
            result.put("message", "message.success.changed.password");
        } catch (Exception e) {
            throw new CustomResponseException("failed.change.password", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
	
}