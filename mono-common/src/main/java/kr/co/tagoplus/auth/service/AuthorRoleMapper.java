package kr.co.tagoplus.auth.service;


import org.apache.ibatis.annotations.Mapper;
import kr.co.tagoplus.auth.entity.AuthorRole;
import kr.co.tagoplus.common.service.GenericMapper;



@Mapper
public interface AuthorRoleMapper extends GenericMapper<AuthorRole, String> {
	public int deleteById(String authorCd);
}
