package kr.co.tagoplus.popup.service;
import java.util.List;
import java.util.Map;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.popup.entity.Popup;

public interface PopupService extends GenericService<Popup, Long>{
	public List<Popup> getByLimit(Map<String, Object> params);
}
