package kr.co.tagoplus.common.service;

public interface IdGnrService {

	public long getIdIndex(String tableName);
	public void incrementIdIndex(String tableName);
}
