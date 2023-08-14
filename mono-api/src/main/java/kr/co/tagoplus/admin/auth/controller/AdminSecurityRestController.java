package kr.co.tagoplus.admin.auth.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.serializer.AdminSerializer;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AdminSecurityRestController {
	//private static Logger logger = LoggerFactory.getLogger(AdminSecurityRestController.class);

	@Autowired
	private AdminService adminService;
	
	@Autowired
	private FileService fileService;

	@GetMapping(value = "/api/security/admins")
	public ResponseEntity<Object> getAdminList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<Admin> admins = adminService.getPagedByFilter(params, pageable);

		return ResponseEntityUtil.list(admins);
	}

	@GetMapping(value = "/api/security/admin/info/list", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getAdminInfoList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Map<String, Object> result = new HashMap<>();

		try {
			Page<Admin> admins = adminService.getPagedByFilter(params, pageable);
			ObjectMapper mapper = new ObjectMapper();
			mapper.registerModule(new SimpleModule().addSerializer(Admin.class, new AdminSerializer()));
			return new ResponseEntity<>(mapper.writeValueAsString(admins), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", "failed.admin.info.list");
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/api/security/admins/{seq:\\d+}")
	public ResponseEntity<Object> getAdminDetail(@PathVariable Long seq) {
		Admin admin = adminService.getById(seq);
		if (admin != null) {
			return ResponseEntityUtil.success(admin);
		}

		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/security/admins/create")
	public ResponseEntity<Object> createAdmins(AttachFile attachFile, Admin admin, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		
		if(adminService.existByUsername(admin.getUsername())) {
			return ResponseEntityUtil.error("error.duplicate.username");
		}
		
		if(adminService.existByEmail(admin.getEmail())) {
			return ResponseEntityUtil.error("error.duplicate.email");
		}  
		
		if(adminService.existByPhone(admin.getPhone())) {
			return ResponseEntityUtil.error("error.duplicate.phone");
		}
		
		long fileGroupSeq;
		if(attachFile.getFile() != null) {
			fileGroupSeq = fileService.generateFileGroup();
			fileService.fileStore(attachFile.getFile(), "Admin", fileGroupSeq);
			admin.setFileGroupSeq(fileGroupSeq);
		}

		admin.setAdminType("admin");
		int affactedRows = adminService.register(admin);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(admin);
		}

		return ResponseEntityUtil.error("error.insert");
	}

	@PostMapping(value = "/api/security/admins/update")
	public ResponseEntity<Object> updateAdmins(AttachFile attachFile, Admin admin, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		if(attachFile.getFile() != null) {
			if (admin.getFileGroupSeq() == null || admin.getFileGroupSeq() == 0) {
				admin.setFileGroupSeq(fileService.generateFileGroup());
			}
			else {
				fileService.deleteByFileGroup(admin.getFileGroupSeq());
			}
			fileService.fileStore(attachFile.getFile(), "Admin", admin.getFileGroupSeq());
		}

		int affactedRows = adminService.update(admin);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(admin);
		}

		return ResponseEntityUtil.error("error.update");
	}

	@PostMapping(value = "/api/security/admins/delete/{seq}")
	public ResponseEntity<Object> deleteAdmins(@PathVariable Long seq) {

		int affactedRows = adminService.deleteById(seq);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(null);
		}			

		return ResponseEntityUtil.error("error.delete");
	}
	
	@PostMapping(value = "/api/security/admin/adminIdExist/{email}")
	public ResponseEntity<Object> adminIdExist(@PathVariable String email) throws BindException {
		//Admin adminExist =  adminService.getByUsername(username);
		if(adminService.existByEmail(email)) {
			return ResponseEntityUtil.error("error.duplicate.email");
		}
			
		return ResponseEntityUtil.success(null);
	}
	
}