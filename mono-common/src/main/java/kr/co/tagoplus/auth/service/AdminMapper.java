package kr.co.tagoplus.auth.service;


import kr.co.tagoplus.auth.entity.Admin;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.common.service.GenericMapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AdminMapper extends GenericMapper<Admin, Long> {
	
	public Admin getByUsername(String username);
	public int insert(Admin admin);
	public int insertSkill(Admin admin);
	public Admin authenticate(String username);
	public Admin getByEmail(String email);
	public int getAllAdminCounts();

	public int deleteSkill(Admin admin);
	public int getOnlineAdminCounts(String validDate);
	public int update(Admin admin);
	public boolean existByUsername(String username);
	public boolean existByEmail(String email);
	public boolean existByPhone(String phone);
	public List<Admin> getManagerListByPosition(Map<String, Object> params);
	public List<Admin> getWorkerListByPosition(Map<String, Object> params);

	public List<Admin> getManagerByProjectSeq(long seq);
	public List<Admin> getWorkerByProjectSeq(long seq);
}