package kr.co.tagoplus.settings.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.settings.entity.SiteInfo;
import kr.co.tagoplus.settings.service.SiteInfoMapper;
import kr.co.tagoplus.settings.service.SiteInfoService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;




@Service
@Transactional("transactionManager")
public class SiteInfoServiceImpl extends AbstractGenericServiceImpl<SiteInfo, Long> implements SiteInfoService {
	
	@Autowired
	SiteInfoMapper mapper;
	
	@Override
	public GenericMapper<SiteInfo, Long> getMapper() {
		return mapper;
	}
	
	public SiteInfo getSiteInfo() {
		return mapper.getSiteInfo();
	}
	
	public int update(SiteInfo siteInfo) {
		return mapper.update(siteInfo);
	}

	
	
}