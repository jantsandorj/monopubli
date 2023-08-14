package kr.co.tagoplus.auth.service;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.form.LoginForm;

import java.util.List;
import java.util.Map;

public interface AdminService extends GenericService<Admin, Long> {
	
	public Admin getByUsername(String username);
	public int register(Admin admin);
	public int registerSkill(Admin admin);
	public Map<String, String> authenticate(LoginForm form);
	public String generateTempPwd(String email);
	public Admin getByEmail(String email);
	public int getAllAdminCounts();
	public int getOnlineAdminCounts(int validMin);
	public void changePassword(Admin admin);
	
	public boolean existByUsername(String username);
	public boolean existByEmail(String email);
	public boolean existByPhone(String phone);
	public int deleteSkill(Admin admin);
	public List<Admin> getManagerListByPosition (Map<String, Object> params);
	public List<Admin> getWorkerListByPosition (Map<String, Object> params);
}
