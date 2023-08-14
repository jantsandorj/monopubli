package kr.co.tagoplus.menu.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import kr.co.tagoplus.auth.service.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import kr.co.tagoplus.auth.entity.Menu;
import kr.co.tagoplus.auth.entity.MenuContent;
import kr.co.tagoplus.auth.service.MenuContentService;
import kr.co.tagoplus.auth.service.MenuService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.file.service.FileService;


@RestController
public class MenuRestController {
	
	@Autowired
	private MenuService menuService;
	
	@Autowired
	private MenuContentService menuContentService;
	
	@Autowired
	private FileService fileService;

	@Autowired
	private MenuMapper menuMapper;
	
	@GetMapping(value = "/api/menus")
	public ResponseEntity<Object> getMenus(@RequestParam Map<String, Object> params) {
		
		//String positionType = params.get("positionType") == null ? "" : params.get("positionType").toString(); 
		List<Menu> menus = menuService.getMenuList(params);
		return ResponseEntityUtil.success(menus);
	}
	
	@GetMapping(value = "/api/menulist")
	public ResponseEntity<Object> getMenuList(@RequestParam Map<String, Object> params, Authentication authentication) {
		String authorCd = UserDetailsHelper.findLoggedInAuthorCd(authentication);
		params.put("authorCd", authorCd);
		List<Menu> menus = menuService.getMenuListByAuth(params);
		return ResponseEntityUtil.success(menus);
	}
	
	@GetMapping(value = "/api/menus/{seq}")
	public ResponseEntity<Object> getMenuDetail(@PathVariable Long seq) {
		Menu menu = menuService.getById(seq);
		if (menu != null) {
			return ResponseEntityUtil.success(menu);
		}

		return ResponseEntityUtil.empty();
	}
	
	@PostMapping(value = "/api/menus/create")
	public ResponseEntity<Object> createMenu(AttachFile attachFile, Menu menu, BindingResult binding, Authentication authentication) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		
		try {
			String menuId = menuService.getMenuCodeGenerator(menu.getParentMenuId(), menu.getAdminMenuYn());
			menu.setMenuId(menuId);
			if(menu.getMenuType() != null && menu.getMenuType().equals("MT_04")) {
				Long userId = UserDetailsHelper.findLoggedInSeq(authentication);
				MenuContent menuContent = new MenuContent();
				menuContent.setMenuId(menuId);
				menuContent.setCreatedBy(userId);
				menuContentService.insert(menuContent);
			}
			
			if(attachFile.getFile() != null) {
            	long fileGroupSeq = fileService.generateFileGroup();
            	menu.setFileGroupSeq(fileGroupSeq);
            	fileService.fileStore(attachFile.getFile(), "Menu", fileGroupSeq);
            }
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		int affactedRows = menuService.saveMenu(menu);
		if (affactedRows > 0)
			return ResponseEntityUtil.success(menu);

		return ResponseEntityUtil.error("error.insert");
	}
	
	
	@PostMapping(value = "/api/menus/update")
	public ResponseEntity<Object> updateMenu(AttachFile attachFile, Menu menu, Authentication authentication, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		if(attachFile.getFile() != null) {
        	if(Long.valueOf(menu.getFileGroupSeq()) == null || menu.getFileGroupSeq() == 0)
        		menu.setFileGroupSeq(fileService.generateFileGroup());
        	else
        		fileService.deleteByFileGroup(menu.getFileGroupSeq());
        	fileService.fileStore(attachFile.getFile(), "Menu", menu.getFileGroupSeq());
        }
		
		int affactedRows = menuService.update(menu);
		if (affactedRows > 0) {
			if(menu.getMenuType().equals("MT_04")) {
				Long userId = UserDetailsHelper.findLoggedInSeq(authentication);
				MenuContent menuContent = new MenuContent();
				menuContent.setMenuId(menu.getMenuId());
				menuContent.setCreatedBy(userId);
				menuContentService.insert(menuContent);
			}
			return ResponseEntityUtil.success(menu);
		}
		return ResponseEntityUtil.error("error.update");
	}
	
	
	@PostMapping(value = "/api/menus/delete/{seq}")
	public ResponseEntity<Object> deleteMenu(@PathVariable Long seq) {

		int affactedRows = menuService.deleteById(seq);

		if (affactedRows > 0)
			return ResponseEntityUtil.success(null);

		return ResponseEntityUtil.error("error.delete");
	}
	
	@GetMapping(value = "/api/menus/roles/{authorCd}")
	public ResponseEntity<Object> getAuthorRoleList(@PathVariable String authorCd) {
		List<Menu> menuList = menuService.getMenuListRole(authorCd);
		List<Menu> listHierarchical = new ArrayList<Menu>();
		for(Menu item : menuList) {
			if(item.getParentSeq() == 0) {
				menuService.getHierarchical(item, menuList);
				listHierarchical.add(item);
			}
		}
		
		
		if(listHierarchical.size() > 0 && !listHierarchical.isEmpty()) {
			return ResponseEntityUtil.success(listHierarchical); 
		}
		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/menu/change/order")
	public ResponseEntity<Object> changeOrder (@RequestBody Map<String, Object> params) {

		System.out.println("menu change");

		ArrayList<Object> menuList = (ArrayList<Object>) params.get("menuList");

		int menuId = 0;
		String parentMenuId = null;
		int parentSeq = 0;
		for(int i=0; i<menuList.size(); i++){
			Map<String, Object> menuItem = (Map<String, Object>) menuList.get(i);
			setMenuId(menuItem, i, parentMenuId, parentSeq);
		}

		return ResponseEntityUtil.success(menuList);
	}

	private void setMenuId(Map<String, Object> menuItem, int menuId, String parentMenuId, int parentSeq) {
		menuId++;
		String strMenuId = String.format("%02d", menuId);
		if(parentMenuId != null && parentMenuId != "" && !parentMenuId.equals("0")) {
			strMenuId = parentMenuId + strMenuId;
		}

		menuItem.put("menuId", strMenuId);
		menuItem.put("parentSeq", parentSeq);

		Menu menu = new Menu();
		menu.setMenuId(strMenuId);
		menu.setParentSeq(parentSeq);
		menu.setSeq(Integer.parseInt(menuItem.get("seq").toString()));
		menuMapper.updateMenuId(menu);

		List<Map<String, Object>> children = (List<Map<String, Object>>) menuItem.get("children");
		if (children != null) {
			parentMenuId = strMenuId;
			parentSeq = Integer.parseInt(menuItem.get("seq").toString());
			for(int i =0; i<children.size(); i++){
				setMenuId(children.get(i), i, parentMenuId, parentSeq);
			}
		}
	}

}
