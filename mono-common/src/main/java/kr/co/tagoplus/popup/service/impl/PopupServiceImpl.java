package kr.co.tagoplus.popup.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.popup.entity.Popup;
import kr.co.tagoplus.popup.service.PopupMapper;
import kr.co.tagoplus.popup.service.PopupService;

@Service
@Transactional("transactionManager")
public class PopupServiceImpl extends AbstractGenericServiceImpl<Popup, Long> implements PopupService {

    @Autowired
    PopupMapper mapper;

    @Override
    public GenericMapper<Popup, Long> getMapper() {
        return mapper;
    }

	@Override
	public List<Popup> getByLimit(Map<String, Object> params) {
		return mapper.getByLimit(params);
	}

    
}