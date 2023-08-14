package kr.co.tagoplus.community.service;

import java.util.List;
import java.util.Map;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.community.entity.Banner;

public interface BannerService extends GenericService<Banner, Long> {
	public List<Banner> getByTypeAndLimit(Map<String, Object> param);
}