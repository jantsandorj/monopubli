package kr.co.tagoplus.auth.service;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.auth.entity.MenuContent;
import kr.co.tagoplus.common.service.GenericMapper;

@Mapper
public interface MenuContentMapper extends GenericMapper<MenuContent, Long> {
	public MenuContent getByMenuId(String menuId);
}
