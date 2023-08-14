package kr.co.tagoplus.auth.service.impl;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.auth.entity.AuthorInfo;
import kr.co.tagoplus.auth.service.AuthorInfoMapper;
import kr.co.tagoplus.auth.service.AuthorInfoService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;

@Service
@Transactional("transactionManager")
public class AuthorInfoServiceImpl extends AbstractGenericServiceImpl<AuthorInfo, String> implements AuthorInfoService {
    protected static Logger logger = LoggerFactory.getLogger(AdminServiceImpl.class);

    @Autowired
    private AuthorInfoMapper mapper;

    @Override
    protected GenericMapper<AuthorInfo, String> getMapper() {
        return mapper;
    }

}