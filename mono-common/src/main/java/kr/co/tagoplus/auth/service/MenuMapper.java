package kr.co.tagoplus.auth.service;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.auth.entity.Menu;
import kr.co.tagoplus.common.service.GenericMapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface MenuMapper extends GenericMapper<Menu, Long> {
    public int canUseMenuNm(String menuNm);
    public int canUseMenuUrl(String menuUrl);

    public List<Menu> getChildList(Long menuId);
    public long countChildList(Long menuId);

    public List<Menu> getWithoutRoleMenuList(Long roleId);
    public long countWithoutRoleMenuList(Long roleId);

    public boolean isChildMenu(Long menuId);

    public int insert(Menu menu);
    public List<Menu> getParentListId(Long menuId);
	public List<Menu> getMenuTreeByUsername(String username);
	
	public List<Menu> getMenuList(Map<String, Object> params);
	public List<Menu> getMenuListByAuth(Map<String, Object> params);
	public List<Menu> getWebMenuList();
	public int saveMenu(Menu menu);
	
	public Menu getMenuByDepth(String menuId, String adminMenuYn);
	public Menu getByMenuId(String menuId, String adminMenuYn);
	public List<Menu> getMenuListRole(String authorCd);
    public int updateMenuId(Menu menu);
}
