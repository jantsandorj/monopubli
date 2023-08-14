package kr.co.tagoplus.notification.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.notification.entity.MailTemplate;
import kr.co.tagoplus.notification.service.MailTemplateMapper;
import kr.co.tagoplus.notification.service.MailTemplateService;

@Service
@Transactional("transactionManager")
public class MailTemplateServiceImpl extends AbstractGenericServiceImpl<MailTemplate, Long> implements MailTemplateService {

	@Autowired
	private MailTemplateMapper mapper;
	
	@Override
	protected GenericMapper<MailTemplate, Long> getMapper() {
		return mapper;
	}

}