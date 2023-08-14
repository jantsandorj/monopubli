package kr.co.tagoplus.admin.content.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.content.entity.ContentSettings;
import kr.co.tagoplus.content.service.ContentSettingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
public class AdminContentSettingsRestController {
	private static Logger logger = LoggerFactory.getLogger(AdminContentSettingsRestController.class);
	
	@Autowired
	private ContentSettingsService contentSettingsService;


	@GetMapping(value = "/api/content/settings")
	public ResponseEntity<Object> getContentSettingsList(
			@RequestParam Map<String, Object> parameters,
			Pageable pageable,
			Authentication authentication) throws CustomResponseException {
		//if (!UserDetailsHelper.isAuthenticated(authentication)) {
		//	throw new CustomResponseException("error.access.denied");
		//}
		Page<ContentSettings> contentSettingsList = contentSettingsService.getPagedByFilter(parameters, pageable);

		return new ResponseEntity<Object>(contentSettingsList, HttpStatus.OK);
	}
	
	@GetMapping(value = "/api/content/forms")
	public ResponseEntity<Object> getContentFormList(
			@RequestParam Map<String, Object> parameters,
			Authentication authentication) throws CustomResponseException {
		
		List<ContentSettings> contentSettingsList = contentSettingsService.getList(parameters);
		return ResponseEntityUtil.success(contentSettingsList);
	}
	

	@GetMapping(value = "/api/content/settings/detail/{code}")
	public ResponseEntity<Object> contentSettingsDetail(
			@PathVariable(name = "code") String code, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		Optional<ContentSettings> contentSettings = null;
		try {
			contentSettings = contentSettingsService.findById(code);

			if (contentSettings.isEmpty()) {
				throw new CustomResponseException("error.nodata");
			}

		} catch (Exception e) {
			throw new CustomResponseException("error.failed", e);
		}

		Map<String, Object> result = new HashMap<>();
		result.put("data", contentSettings);
		result.put("status", "success");
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	@GetMapping(value = "/api/content/settings/{code}")
	public ResponseEntity<Object> contentSettingsDtl(
			@PathVariable(name = "code") String code, Authentication authentication) throws CustomResponseException {
		//if (!UserDetailsHelper.isAuthenticated(authentication)) {
		//	throw new CustomResponseException("error.access.denied");
		//}

		Optional<ContentSettings> contentSettings = null;
		try {
			contentSettings = contentSettingsService.findById(code);

			if (contentSettings.isEmpty()) {
				throw new CustomResponseException("error.nodata");
			}

		} catch (Exception e) {
			throw new CustomResponseException("error.failed", e);
		}

		Map<String, Object> result = new HashMap<>();
		result.put("data", contentSettings);
		result.put("status", "success");
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	@PostMapping(value = "/api/content/settings/create")
	public ResponseEntity<Object> createContentSettings(
//			Authentication authentication,
//			AttachFileList attachments, 
			@RequestBody			ContentSettings contentSettings,
			BindingResult binding,
			@RequestParam Map<String, Object> parameters,
			HttpServletRequest request,
			Authentication authentication) throws CustomResponseException {
		//if (binding.hasErrors()) {
		//	throw new CustomResponseException("error.binding");
		//}

		//if (!UserDetailsHelper.isAuthenticated(authentication)) {
		//	throw new CustomResponseException("error.access.denied");
		//}
//		String userId = UserDetailsHelper.findLoggedInUserId(authentication);

		Long userId = UserDetailsHelper.findLoggedInSeq(authentication);
		contentSettings.setCreatedBy(userId);

		//	validating some datas, throw if returns errorMessage
		String validationErrorMessage = validate(contentSettings);
		if (validationErrorMessage != "") {
			throw new CustomResponseException(validationErrorMessage);
		}

		//	checking is another contentSettings exists with same code
		if (getDuplicatedContentSettings(contentSettings, "") >= 1) {
			throw new CustomResponseException("failed.content-settings.duplicated");
		}

		Map<String, Object> result = new HashMap<>();

		try {
			//if(attachments.getFiles() != null) {
            //	long fileGroupSeq = fileService.generateFileGroup();
            //	contentSettings.setFileGroupSeq(fileGroupSeq);
            //	fileService.storeFile(attachments.getFiles(), "ContentSettings", fileGroupSeq);
            //}
			contentSettingsService.insert(contentSettings);
			result.put("data", contentSettings);
			result.put("message", "message.success.insert");
			result.put("status", "success");
		} catch (Exception e) {
			logger.error("error: ", e);
			throw new CustomResponseException("error.insert", e);
		}

		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	//	retuns total duplicated contentSettings by code
	long getDuplicatedContentSettings(ContentSettings contentSettings, String excludedCode) {
		Map<String, Object> checkParam = new HashMap<String, Object>();
		checkParam.put("code", contentSettings.getCode());
		if (excludedCode != "") {
			checkParam.put("excludedCode", excludedCode);
		}

		return contentSettingsService.countByFilter(checkParam);
	}

	//	validating some fields before save
	String validate(ContentSettings contentSettings) {
		String errorMessage = "";

		//	code
		String codeValidated = contentSettings.getCode();
		codeValidated = codeValidated.toLowerCase();
//		Pattern p = Pattern.compile("^[a-zA-Z-Z0-9-_-]");
//		codeValidated = p.matcher(codeValidated).replaceAll("");
		codeValidated = codeValidated.replace(" ", "_");
		contentSettings.setCode(codeValidated);

		//	useYn
		contentSettings.setUseYn(contentSettings.getUseYn() != null && contentSettings.getUseYn().equals("Y") ? "Y" : "N");

		return errorMessage;
	}

	@PostMapping(value = "/api/content/settings/update")
	public ResponseEntity<Object> updateContentSettings(
		//	AttachFileList attachments,
			Authentication authentication,
			@RequestBody	ContentSettings contentSettings,
			BindingResult binding,
			HttpServletRequest request) throws CustomResponseException {
		//if (binding.hasErrors()) {
		//	throw new CustomResponseException("error.binding");
		//}

		//if (!UserDetailsHelper.isAuthenticated(authentication)) {
		//	throw new CustomResponseException("error.access.denied");
		//}
		Long userId = UserDetailsHelper.findLoggedInSeq(authentication);

		contentSettings.setModifiedBy(userId);

		//	validating some datas, throw if returns errorMessage
		String validationErrorMessage = validate(contentSettings);
		if (validationErrorMessage != "") {
			throw new CustomResponseException(validationErrorMessage);
		}

		//	checking is another applicant exists on same course not including self
		if (getDuplicatedContentSettings(contentSettings, contentSettings.getCode()) >= 1) {
			throw new CustomResponseException("failed.content-settings.duplicated");
		}

		Map<String, Object> result = new HashMap<String, Object>();
		try {
			//if(attachments.getFiles() != null) {
            //	if(Long.valueOf(contentSettings.getFileGroupSeq()) == null || contentSettings.getFileGroupSeq() == 0)
            //		contentSettings.setFileGroupSeq(fileService.generateFileGroup());
            //	fileService.storeFile(attachments.getFiles(), "ContentSettings", contentSettings.getFileGroupSeq());
            //}
			
			contentSettingsService.update(contentSettings);
			result.put("message", "message.success.update");
			result.put("status", "success");
		} catch (Exception e) {
			logger.error("error: ", e);
			throw new CustomResponseException("error.update", e);
		}

		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	//	updating custom fields for contentSettings
	@PostMapping(value = "/api/content/settings/fields")
	public ResponseEntity<Object> contentSettingsUpdateFields(
			Authentication authentication,
			@RequestBody Map<String, Object> customFields,
			HttpServletRequest request) throws CustomResponseException {

		//if (!UserDetailsHelper.isAuthenticated(authentication)) {
		//	throw new CustomResponseException("error.access.denied");
		//}
		Long userId = UserDetailsHelper.findLoggedInSeq(authentication);

		Map<String, Object> result = new HashMap<String, Object>();
		try {
			ContentSettings contentSettings = contentSettingsService.getById(customFields.get("code").toString());
			if(contentSettings != null) {
				contentSettings.setModifiedBy(userId);
				contentSettings.setFieldsJson(customFields.get("fieldsJson").toString());

				contentSettingsService.update(contentSettings);
				result.put("message", "message.success.update");
				result.put("status", "success");
			}
		} catch (Exception e) {
			logger.error("error: ", e);
			throw new CustomResponseException("error.update", e);
		}

		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}

	@DeleteMapping(value = "/api/content/settings/delete/{code}")
	public ResponseEntity<Object> deleteContentSettings(
			Authentication authentication,
			@PathVariable String code) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "error");

		try {
			ContentSettings contentSettings = contentSettingsService.getById(code);
			if(contentSettings != null) {
				contentSettingsService.deleteById(code);
				result.put("message", "message.success.delete");
				result.put("status", "success");
			}
		} catch (Exception e) {
			throw new CustomResponseException("error.delete", e);
		}

		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
}