package kr.co.tagoplus.auth.service;


import kr.co.tagoplus.auth.entity.Company;
import kr.co.tagoplus.common.service.GenericMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CompanyMapper extends GenericMapper<Company, Long> {
    public int update(Company company);
    public Company getByUserSeq(Long userSeq);
}
