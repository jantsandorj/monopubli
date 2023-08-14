package kr.co.tagoplus.auth.service;

import kr.co.tagoplus.auth.entity.Company;
import kr.co.tagoplus.common.service.GenericService;

public interface CompanyService extends GenericService<Company, Long> {

    public Company register(Company company);
    public int update(Company company);

    public Company getByUserSeq(Long userSeq);
}
