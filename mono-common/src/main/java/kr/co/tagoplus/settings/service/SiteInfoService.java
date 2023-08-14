package kr.co.tagoplus.settings.service;

import kr.co.tagoplus.settings.entity.SiteInfo;
import kr.co.tagoplus.common.service.GenericService;


public interface SiteInfoService extends GenericService<SiteInfo, Long> {
	public SiteInfo getSiteInfo();	
	public int update(SiteInfo siteInfo);
}
