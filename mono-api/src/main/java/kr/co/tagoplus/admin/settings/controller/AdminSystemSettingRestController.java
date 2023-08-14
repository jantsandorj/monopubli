package kr.co.tagoplus.admin.settings.controller;

import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.settings.entity.SystemSettings;
import kr.co.tagoplus.settings.service.SystemSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AdminSystemSettingRestController {

	@Autowired
	private SystemSettingsService systemSettingsService;

	@GetMapping(value = "/api/system/settings")
	public ResponseEntity<Object> getSystemSettings() {
		
		SystemSettings systemSettings = systemSettingsService.getSystemSettings();
		return ResponseEntityUtil.success(systemSettings);
	}

	@PostMapping(value = "/api/system/settings/update")
	public ResponseEntity<Object> updateSystemSettingsInfo( SystemSettings systemSettings, BindingResult binding, Authentication authentication) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		systemSettings.setModifiedBy(authentication.getName());
		int affactedRows = systemSettingsService.update(systemSettings);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(systemSettings);
		}

		return ResponseEntityUtil.error("error.update");
	}
	
}