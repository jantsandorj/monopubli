package kr.co.tagoplus.auth.service.impl;

import kr.co.tagoplus.auth.entity.Company;
import kr.co.tagoplus.auth.service.CompanyMapper;
import kr.co.tagoplus.auth.service.CompanyService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("transactionManager")
public class CompanyServiceImpl extends AbstractGenericServiceImpl<Company, Long> implements CompanyService {
    protected static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private CompanyMapper mapper;

    @Override
    protected GenericMapper<Company, Long> getMapper() {return mapper;}

    @Override
    public Company register(Company company) {
        insert(company);
        return company;
    }

    @Override
    public Company getByUserSeq(Long userSeq) {
        return mapper.getByUserSeq(userSeq);
    }
}
