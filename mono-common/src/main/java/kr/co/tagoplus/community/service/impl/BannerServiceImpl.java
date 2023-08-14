package kr.co.tagoplus.community.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.community.entity.Banner;
import kr.co.tagoplus.community.service.BannerMapper;
import kr.co.tagoplus.community.service.BannerService;

@Service
@Transactional("transactionManager")
public class BannerServiceImpl extends AbstractGenericServiceImpl<Banner, Long> implements BannerService {
	protected static Logger logger = LoggerFactory.getLogger(BoardServiceImpl.class);
	
	@Autowired
	private BannerMapper mapper;
	
	@Override
	public GenericMapper<Banner, Long> getMapper() {
		return mapper;
	}
	
	@Override
    public List<Banner> getByTypeAndLimit(Map<String, Object> param){
    	return mapper.getByTypeAndLimit(param);
    }
}