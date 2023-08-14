package kr.co.tagoplus.auth.service;

import kr.co.tagoplus.auth.entity.Menu;
import kr.co.tagoplus.common.service.GenericService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Map;

public interface MenuService extends GenericService<Menu, Long> {
	public static final String PREFIX = "menu_";
    public int canUseMenuNm(String menuNm);
    public int canUseMenuUrl(String menuUrl);

    public Page<Menu> getChildList(Long menuId, Pageable pageable);
    public long countChildList(Long menuId);
    public List<Menu> getAllChildList(Long menuId);


    public Page<Menu> getWithoutRoleMenuList(Long roleId, Pageable pageable);
    public long countWithoutRoleMenuList(Long roleId);
    public List<Menu> getAllWithoutRoleMenuList(Long roleId);

    public boolean isChildMenu(Long menuId);
    public List<Menu> getParentListId(Long menuId);
	public List<Menu> getMenuTreeByUsername(String username);
	
	public List<Menu> getMenuList(Map<String, Object> params);
	public List<Menu> getMenuListByAuth(Map<String, Object> params);
	public int saveMenu(Menu menu);
	public List<Menu> getWebMenuList();
	public String getMenuCodeGenerator(String menuId, String adminMenuYn) throws Exception;
	
    public List<Menu> getMenuListRole(String authorCd); 
    public void getHierarchical(Menu root, List<Menu> list);
}
