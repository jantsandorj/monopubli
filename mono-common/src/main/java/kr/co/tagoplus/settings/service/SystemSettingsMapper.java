package kr.co.tagoplus.settings.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.settings.entity.SystemSettings;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface SystemSettingsMapper extends GenericMapper<SystemSettings, Integer> {

	public SystemSettings getSystemSettings();
}
