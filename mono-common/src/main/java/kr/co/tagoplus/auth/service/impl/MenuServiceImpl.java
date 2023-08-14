package kr.co.tagoplus.auth.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.auth.entity.Menu;
import kr.co.tagoplus.auth.service.MenuMapper;
import kr.co.tagoplus.auth.service.MenuService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class MenuServiceImpl extends AbstractGenericServiceImpl<Menu, Long> implements MenuService {
	protected static Logger logger = LoggerFactory.getLogger(MenuServiceImpl.class);

	@Autowired
	private MenuMapper mapper;

	@Override
	protected GenericMapper<Menu, Long> getMapper() {
		return mapper;
	}

	@Override
	public int canUseMenuNm(String menuNm) { return mapper.canUseMenuNm(menuNm);}

	@Override
	public int canUseMenuUrl(String menuUrl) {	return mapper.canUseMenuUrl(menuUrl); }

	@Override
	public Page<Menu> getChildList(Long menuId, Pageable pageable) {
		List<Menu> childList = getAllChildList(menuId);

		return PageableExecutionUtils.getPage(childList, pageable, () -> countChildList(menuId));
	}

	@Override
	public long countChildList(Long menuId) { return mapper.countChildList(menuId);	}

	@Override
	public List<Menu> getAllChildList(Long menuId) {
		return mapper.getChildList(menuId);
	}

	@Override
	public List<Menu> getParentListId(Long menuId) { return mapper.getParentListId(menuId); }

	@Override
	public boolean isChildMenu(Long menuId) { return mapper.isChildMenu(menuId); }

	@Override
	public Page<Menu> getWithoutRoleMenuList(Long roleId,  Pageable pageable) {
		List<Menu> withoutRoleMenuList = getAllWithoutRoleMenuList(roleId);
		return PageableExecutionUtils.getPage(withoutRoleMenuList, pageable, () -> countWithoutRoleMenuList(roleId));
	}

	@Override
	public long countWithoutRoleMenuList(Long roleId) {
		return mapper.countWithoutRoleMenuList(roleId);
	}

	@Override
	public List<Menu> getAllWithoutRoleMenuList(Long roleId) {
		return mapper.getWithoutRoleMenuList(roleId);
	}

	@Override
	public List<Menu> getMenuTreeByUsername(String username) {
		return mapper.getMenuTreeByUsername(username);
	}
	
	@Override
	public List<Menu> getMenuList(Map<String, Object> params) {
		return mapper.getMenuList(params);
	}
	
	@Override
	public List<Menu> getMenuListByAuth(Map<String, Object> params) {
		return mapper.getMenuListByAuth(params);
	}
	
	@Override
	public List<Menu> getWebMenuList() {
		return mapper.getWebMenuList();
	}
	
	@Override
	public int saveMenu(Menu menu) {
		return mapper.saveMenu(menu);
	}
	
	@Override
	public String getMenuCodeGenerator(String parentMenuId, String adminMenuYn) throws Exception {
		Menu lastMenu;
		String newMenuCode = "";
		int depth = 1;
		DecimalFormat df = new DecimalFormat("00");
		
		if(parentMenuId != null && parentMenuId != "" && !parentMenuId.equals("0")) {
			depth =  parentMenuId.split("(?<=\\G.{2})").length + 1;
		}
		
		lastMenu = mapper.getMenuByDepth(parentMenuId, adminMenuYn);
		
		if(lastMenu != null) {
			parentMenuId = lastMenu.getMenuId();
		}
		String[] menuCodeArray = parentMenuId.split("(?<=\\G.{2})");
		
		//int deptConverted = Integer.valueOf(depth); 
		
		if(depth <= menuCodeArray.length){			
			for(int i=0; i < menuCodeArray.length; i++){
				if(depth == i) {
					newMenuCode += df.format(Integer.parseInt(menuCodeArray[depth]) + 1);
					break;
				}else {
					newMenuCode += menuCodeArray[i];
				}			
			}
		}
		else {
			newMenuCode += parentMenuId + "01";
		}
		
		newMenuCode = getMenuCodeCheck(newMenuCode, adminMenuYn);
		
		return newMenuCode;
	}
	
	public String getMenuCodeCheck(String menuCode, String adminMenuYn) throws Exception {
		DecimalFormat df = new DecimalFormat("00");
		
		Menu menu = mapper.getByMenuId(menuCode, adminMenuYn);	
		if(menu != null) {
			String[] menuCodeArray = menu.getMenuId().split("(?<=\\G.{2})");				
			String newLastCode =  df.format(Integer.parseInt(menuCodeArray[menuCodeArray.length-1]) + 1);			
			menuCodeArray[menuCodeArray.length-1] = newLastCode;
			String newMenuCode = "";
			
			for(String str : menuCodeArray) {
				newMenuCode += str;
			}
						
			return getMenuCodeCheck(newMenuCode, adminMenuYn);
		}
		return menuCode;
	}
	
	@Override
    public List<Menu> getMenuListRole(String authorCd){
    	return mapper.getMenuListRole(authorCd);
    } 
	
	@Override
	public void getHierarchical(Menu root, List<Menu> list) {
		boolean isFound = false;
		List<Menu> listSub = new ArrayList<Menu>();
		
		for(Menu item : list) {
			if(root.getSeq() == item.getParentSeq()) {
				listSub.add(item);
				isFound = true;
			}
		}
		
		if(isFound) {
			for(Menu item : listSub) {
				getHierarchical(item, list);
			}
		}
		
		root.setListSub(listSub);
	}
}
