package kr.co.tagoplus.user.main.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import kr.co.tagoplus.auth.entity.Menu;
import kr.co.tagoplus.auth.entity.MenuContent;
import kr.co.tagoplus.auth.serializer.MenuSerializer;
import kr.co.tagoplus.auth.service.MenuContentService;
import kr.co.tagoplus.auth.service.MenuService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.community.entity.Banner;
import kr.co.tagoplus.community.entity.Notice;
import kr.co.tagoplus.community.service.BannerService;
import kr.co.tagoplus.community.service.NoticeService;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.service.ProjectService;
import kr.co.tagoplus.settings.entity.SiteInfo;
import kr.co.tagoplus.settings.service.SiteInfoService;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class ApiMainRestController {
	//private static Logger logger = LoggerFactory.getLogger(ApiContentSettingsRestController.class);
	
	@Autowired
    private NoticeService noticeService;
	
	@Autowired
    private BannerService bannerService;
	
	@Autowired
    private MenuService menuService;
	
	@Autowired
	private SiteInfoService siteInfoService;
	
	@Autowired
	private MenuContentService menuContentService;

	@Autowired
	private ProjectService projectService;

	@GetMapping(value = "/web/main")
	public ResponseEntity<Object> getMainList(Authentication authentication) {
		
		Map<String, Object> result = new HashedMap<String, Object>();
		Map<String, Object> param = new HashedMap<String, Object>();

		param.put("bannerType", "VSL_BANNER");
		param.put("number", 10);
		List<Banner> banners = bannerService.getByTypeAndLimit(param);
		result.put("banners", banners);

		List<Project> projects = projectService.getCompletedByLimit();
		result.put("projects", projects);

		Boolean isAdmin = UserDetailsHelper.isAdmin();
		Long userSeq = UserDetailsHelper.findLoggedInSeq(authentication);

		if(!isAdmin && userSeq != null){
            List<Project> myProjects = projectService.getByUserWithLimit(UserDetailsHelper.findLoggedInSeq(authentication));
            result.put("myProjects", myProjects);
        }

		List<Project> projectStatistics = projectService.getStatistic();
		result.put("projectStatistics", projectStatistics);

		param.put("bannerType", "P_ZONE");
		param.put("number", 1);
		List<Banner> popups =  bannerService.getByTypeAndLimit(param);
		result.put("popups", popups);

		List<Notice> notices = noticeService.getByLimit();
		result.put("notices", notices);

		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	@GetMapping(value="/web/menu/list", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getWebMenuList() throws JsonProcessingException {
		Map<String, Object> result = new HashedMap<String, Object>();

		ObjectMapper mapper = new ObjectMapper();
		mapper.registerModule(new SimpleModule().addSerializer(Menu.class, new MenuSerializer()));

		List<Menu> menus = menuService.getWebMenuList();
		result.put("data", menus);

		return new ResponseEntity<Object>(mapper.writeValueAsString(result), HttpStatus.OK);
	}
	
	@GetMapping(value = "/web/site/info")
	public ResponseEntity<Object> getSiteInfo() {
		
		SiteInfo siteInfo = siteInfoService.getSiteInfo();
		return ResponseEntityUtil.success(siteInfo);
	}
	
	@GetMapping(value = "/web/menucontents/{menuId}")
	public ResponseEntity<Object> getMenuContentDetail(@PathVariable String menuId) {
		MenuContent menuContent = menuContentService.getByMenuId(menuId);
		if (menuContent != null) {
			return ResponseEntityUtil.success(menuContent);
		}

		return ResponseEntityUtil.empty();
	}
	
	
}