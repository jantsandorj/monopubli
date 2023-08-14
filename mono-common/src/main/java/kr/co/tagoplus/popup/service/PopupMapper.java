package kr.co.tagoplus.popup.service;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.popup.entity.Popup;

@Mapper
public interface PopupMapper extends GenericMapper<Popup, Long> {
	public List<Popup> getByLimit(Map<String, Object> params);
}
