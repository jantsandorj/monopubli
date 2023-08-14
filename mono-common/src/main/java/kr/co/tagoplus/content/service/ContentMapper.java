package kr.co.tagoplus.content.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.content.entity.Content;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ContentMapper extends GenericMapper<Content, String> {

    public int insert(Content content);
	
}
