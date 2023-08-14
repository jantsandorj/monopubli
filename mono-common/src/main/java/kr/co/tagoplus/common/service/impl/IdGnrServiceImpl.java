package kr.co.tagoplus.common.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.common.service.IdGnrMapper;
import kr.co.tagoplus.common.service.IdGnrService;

@Service
@Transactional("transactionManager")
public class IdGnrServiceImpl implements IdGnrService {

	@Autowired
	private IdGnrMapper mapper;
	
	@Override
	public long getIdIndex(String tableName) {
		long result = mapper.getIdIndex(tableName);
		incrementIdIndex(tableName);
		
		return result;
	}

	@Override
	public void incrementIdIndex(String tableName) {
		mapper.incrementIdIndex(tableName);
	}
}