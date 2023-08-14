package kr.co.tagoplus.common.service;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IdGnrMapper {

	public long getIdIndex(String tableName);
	public void incrementIdIndex(String tableName);
}
