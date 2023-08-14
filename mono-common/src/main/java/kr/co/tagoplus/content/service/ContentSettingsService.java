package kr.co.tagoplus.content.service;

import kr.co.tagoplus.content.entity.ContentSettings;
import kr.co.tagoplus.common.service.GenericService;

import java.util.List;
import java.util.Map;

public interface ContentSettingsService extends GenericService<ContentSettings, String> {

	public Map<String, Object> getMappedByIdList(List<String> idList);
	public List<ContentSettings> getList(Map<String, Object> params);
}