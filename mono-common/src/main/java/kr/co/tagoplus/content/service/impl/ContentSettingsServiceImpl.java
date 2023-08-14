package kr.co.tagoplus.content.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.content.entity.ContentSettings;
import kr.co.tagoplus.content.service.ContentSettingsMapper;
import kr.co.tagoplus.content.service.ContentSettingsService;
import org.apache.commons.text.CaseUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class ContentSettingsServiceImpl extends AbstractGenericServiceImpl<ContentSettings, String> implements ContentSettingsService {
	protected static Logger logger = LoggerFactory.getLogger(ContentSettingsServiceImpl.class);

	@Autowired
	private ContentSettingsMapper mapper;

    @Override
    public GenericMapper<ContentSettings, String> getMapper() {
        return mapper;
    }

	@Override
	public Map<String, Object> getMappedByIdList(List<String> ids) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		List<ContentSettings> settingsList = mapper.getByBulk(ids); 
		
		for(ContentSettings contentSettings : settingsList) {
			result.put(CaseUtils.toCamelCase(contentSettings.getCode(), false, '_'), contentSettings); 
		}
		
		return result;
	}
	
	@Override
	public List<ContentSettings> getList(Map<String, Object> params){
		return mapper.getList(params);
	}
	
}
