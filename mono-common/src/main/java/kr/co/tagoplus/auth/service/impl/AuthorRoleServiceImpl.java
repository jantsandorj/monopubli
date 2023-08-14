package kr.co.tagoplus.auth.service.impl;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.auth.entity.AuthorRole;
import kr.co.tagoplus.auth.service.AuthorRoleMapper;
import kr.co.tagoplus.auth.service.AuthorRoleService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;

@Service
@Transactional("transactionManager")
public class AuthorRoleServiceImpl extends AbstractGenericServiceImpl<AuthorRole, String> implements AuthorRoleService {
    protected static Logger logger = LoggerFactory.getLogger(AuthorRoleServiceImpl.class);

    @Autowired
    private AuthorRoleMapper mapper;

    @Override
    protected GenericMapper<AuthorRole, String> getMapper() {
        return mapper;
    }

    @Override
    public int deleteById(String authorCd) {
    	return mapper.deleteById(authorCd);
    }
}