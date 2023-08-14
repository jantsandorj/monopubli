package kr.co.tagoplus.auth.service;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.auth.entity.AuthorInfo;
import kr.co.tagoplus.auth.entity.Menu;
import kr.co.tagoplus.common.service.GenericMapper;



@Mapper
public interface AuthorInfoMapper extends GenericMapper<AuthorInfo, String> {
	public List<Menu> getMenuListRole(String authorCd);
}
