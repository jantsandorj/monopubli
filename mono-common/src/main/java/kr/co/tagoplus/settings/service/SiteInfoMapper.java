package kr.co.tagoplus.settings.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.settings.entity.SiteInfo;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface SiteInfoMapper extends GenericMapper<SiteInfo, Long> {

	public SiteInfo getSiteInfo();
}
