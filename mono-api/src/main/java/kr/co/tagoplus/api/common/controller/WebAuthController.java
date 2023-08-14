package kr.co.tagoplus.api.common.controller;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.co.tagoplus.form.SendTempPasswordForm;
import kr.co.tagoplus.form.UserPasswordChangeForm;
import kr.co.tagoplus.notification.service.EmailService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.service.UserService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.common.util.JwtHelper;
import kr.co.tagoplus.file.service.FileService;
import kr.co.tagoplus.form.LoginForm;

@RestController
public class WebAuthController {
    protected Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
	private EmailService emailService;
    
    @Autowired
	private FileService fileService;

    @PostMapping(path = "/web/login" )
    public ResponseEntity<Object> login(LoginForm loginForm, BindingResult binding, HttpServletRequest request, HttpServletResponse response) {

        String authToken = userService.authAndToken(loginForm);
        Map<String, Object> result = new HashMap<String, Object>();

        if (StringUtils.isNotBlank(authToken)) {
        	if(jwtHelper.validateToken(authToken)){
				result.put("message", "Successfully Logged in");
				result.put("status", HttpStatus.OK);
				result.put("token", authToken);

				return new ResponseEntity<Object>(result, HttpStatus.OK);
			}
        }

        result.put("message", "User not authenticated");

        return new ResponseEntity<Object>(result, HttpStatus.UNAUTHORIZED);
    }

    @PostMapping(value = "/web/forget/password")
    public ResponseEntity<Object> forgetPassword(SendTempPasswordForm tempPasswordForm) {
        String email = tempPasswordForm.getEmail();
        User user = userService.getByEmail(email);
        if (user == null) {
            return ResponseEntityUtil.error(null, "failed.user.not.found");
        }

        if ("Y".equals(user.getIsDeleted())) {
            return ResponseEntityUtil.error(null, "failed.user.deleted");
        }

        String tempPass = userService.generateTempPwd(email);
        if (StringUtils.isBlank(tempPass)) {
            return ResponseEntityUtil.error(null, "failed.user.not.found");
        }

        try {
			emailService.sendAdminTempPassword(email, tempPass);
			return ResponseEntityUtil.success(null);
        } catch (Exception e) {
            return ResponseEntityUtil.error(null, "failed.user.not.found");
        }
    }

    @PostMapping(value = "/web/change/password")
    public ResponseEntity<Object> changePassword(UserPasswordChangeForm passwordChangeForm, Authentication authentication) throws CustomResponseException {
    	if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        try {
            
            String username = UserDetailsHelper.findLoggedInUsername(authentication);
            User user = userService.getByUsername(username);
            if(user == null)
            	return ResponseEntityUtil.error(null, "failed.user.not.found");
            if(!userService.checkPasswordMatch(passwordChangeForm.getPasswordCheck(), user.getPassword()))
            	return ResponseEntityUtil.error(null, "failed.check.oldpassword");
            
            passwordChangeForm.setUsername(username);
            userService.changePassword(passwordChangeForm);

            return ResponseEntityUtil.success(null);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("failed.change.password", e);
        }
    }
    
    @PostMapping(value = "/web/user/create")
	public ResponseEntity<Object> createUser(AttachFile attachFile, User user, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		
		if(userService.existByUsername(user.getUsername())) {
			return ResponseEntityUtil.error(null, "failed.duplicate.username");
		}
		
		if(userService.existByEmail(user.getEmail())) {
			return ResponseEntityUtil.error(null, "failed.duplicate.email");
		}  
		
		if(userService.existByPhone(user.getPhone())) {
			return ResponseEntityUtil.error(null, "failed.duplicate.phone");
		}
		
		long fileGroupSeq;
		if(attachFile.getFile() != null) {
			fileGroupSeq = fileService.generateFileGroup();
			fileService.fileStore(attachFile.getFile(), "User", fileGroupSeq);
			user.setFileGroupSeq(fileGroupSeq);
		}
		
		User result = userService.register(user);

		if (result != null) {
			return ResponseEntityUtil.success(user);
		}

		return ResponseEntityUtil.error(null, "failed.user.insert");
	}
    
	@PostMapping(value = "/web/user/update")
	public ResponseEntity<Object> updateUser(AttachFile attachFile, User user, BindingResult binding, Authentication authentication) throws BindException, CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
		
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		if(attachFile.getFile() != null) {
			if (Long.valueOf(user.getFileGroupSeq()) == null) {
				user.setFileGroupSeq(fileService.generateFileGroup());
			}
			fileService.fileStore(attachFile.getFile(), "User", user.getFileGroupSeq());
		}

		int affactedRows = userService.update(user);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(user);
		}

		return ResponseEntityUtil.error(null, "failed.update");
	}
	
	@GetMapping(value = "/web/user")
	public ResponseEntity<Object> getUserDetail(Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
		
		User user = userService.getByUsername(authentication.getName());
		if (user != null) {
			return ResponseEntityUtil.success(user);
		}

		return ResponseEntityUtil.empty();
	}
	
	@PostMapping(value = "/web/user/userIdExist/{username}")
	public ResponseEntity<Object> userIdExist(@PathVariable String username) throws BindException {
		Boolean userExist =  userService.existByUsername(username);
		if(userExist)
			return ResponseEntityUtil.error(null, "failed.duplicate.username");
		return ResponseEntityUtil.success(null);
	}

}
