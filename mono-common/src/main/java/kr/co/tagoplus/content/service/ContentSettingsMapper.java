package kr.co.tagoplus.content.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.content.entity.ContentSettings;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;



@Mapper
public interface ContentSettingsMapper extends GenericMapper<ContentSettings, String> {

    public int insert(ContentSettings contentSettings);
    public List<ContentSettings> getByBulk(List<String> ids);
    public List<ContentSettings> getList(Map<String, Object> params);
}
