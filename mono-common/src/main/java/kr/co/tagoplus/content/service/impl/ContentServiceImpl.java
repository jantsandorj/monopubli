package kr.co.tagoplus.content.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.content.entity.Content;
import kr.co.tagoplus.content.service.ContentMapper;
import kr.co.tagoplus.content.service.ContentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("transactionManager")
public class ContentServiceImpl extends AbstractGenericServiceImpl<Content, String> implements ContentService {
	protected static Logger logger = LoggerFactory.getLogger(ContentServiceImpl.class);

	@Autowired
	private ContentMapper mapper;

    @Override
    public GenericMapper<Content, String> getMapper() {
        return mapper;
    }
}
