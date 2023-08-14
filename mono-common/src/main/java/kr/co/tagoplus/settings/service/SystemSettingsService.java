package kr.co.tagoplus.settings.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.settings.entity.SystemSettings;


public interface SystemSettingsService extends GenericService<SystemSettings, Integer> {
	public SystemSettings getSystemSettings();
	public int update(SystemSettings systemSettings);
}
