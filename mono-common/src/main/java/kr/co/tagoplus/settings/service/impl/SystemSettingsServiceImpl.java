package kr.co.tagoplus.settings.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.settings.entity.SystemSettings;
import kr.co.tagoplus.settings.service.SystemSettingsMapper;
import kr.co.tagoplus.settings.service.SystemSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional("transactionManager")
public class SystemSettingsServiceImpl extends AbstractGenericServiceImpl<SystemSettings, Integer> implements SystemSettingsService {
	
	@Autowired
	SystemSettingsMapper mapper;
	
	@Override
	public GenericMapper<SystemSettings, Integer> getMapper() {
		return mapper;
	}
	
	public SystemSettings getSystemSettings() {
		return mapper.getSystemSettings();
	}
	
	public int update(SystemSettings systemSettings) {
		return mapper.update(systemSettings);
	}

	
	
}