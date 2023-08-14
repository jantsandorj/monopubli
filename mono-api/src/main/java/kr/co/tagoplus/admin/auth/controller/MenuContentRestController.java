package kr.co.tagoplus.admin.auth.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import kr.co.tagoplus.auth.entity.MenuContent;
import kr.co.tagoplus.auth.service.MenuContentService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;


@RestController
public class MenuContentRestController {
	
	@Autowired
	private MenuContentService menuContentService;
	
	@GetMapping(value = "/api/menucontents")
	public ResponseEntity<Object> getMenuContentList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) {
		
		Page<MenuContent> menuContents = menuContentService.getPagedByFilter(params, pageable);
		return ResponseEntityUtil.success(menuContents);
	}
	
	@GetMapping(value = "/api/menucontents/{seq}")
	public ResponseEntity<Object> getMenuContentDetail(@PathVariable Long seq) {
		MenuContent menuContent = menuContentService.getById(seq);
		if (menuContent != null) {
			return ResponseEntityUtil.success(menuContent);
		}

		return ResponseEntityUtil.empty();
	}
	
	@PostMapping(value = "/api/menucontents/update")
	public ResponseEntity<Object> updateMenuContent(MenuContent menuContent, Authentication authentication, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		
		menuContent.setModifiedBy(UserDetailsHelper.findLoggedInSeq(authentication));
		int affactedRows = menuContentService.update(menuContent);
		if (affactedRows > 0)
			return ResponseEntityUtil.success(menuContent);

		return ResponseEntityUtil.error("error.update");
	}
	
}
