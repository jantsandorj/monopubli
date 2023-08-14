package kr.co.tagoplus.auth.service;

import kr.co.tagoplus.auth.entity.MenuContent;
import kr.co.tagoplus.common.service.GenericService;



public interface MenuContentService extends GenericService<MenuContent, Long> {
	public MenuContent getByMenuId(String menuId);
}
