package kr.co.tagoplus.auth.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.auth.entity.MenuContent;
import kr.co.tagoplus.auth.service.MenuContentMapper;
import kr.co.tagoplus.auth.service.MenuContentService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;


@Service
@Transactional("transactionManager")
public class MenuContentServiceImpl extends AbstractGenericServiceImpl<MenuContent, Long> implements MenuContentService {
	protected static Logger logger = LoggerFactory.getLogger(MenuServiceImpl.class);

	@Autowired
	private MenuContentMapper mapper;

	@Override
	protected GenericMapper<MenuContent, Long> getMapper() {
		return mapper;
	}
	
	@Override
	public MenuContent getByMenuId(String menuId) {
		return mapper.getByMenuId(menuId);
	}
}
