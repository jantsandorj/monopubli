package kr.co.tagoplus.auth.service;

import java.util.List;
import java.util.Map;

import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.form.LoginForm;
import kr.co.tagoplus.form.PasswordResetForm;
import kr.co.tagoplus.form.UserPasswordChangeForm;

public interface UserService extends GenericService<User, Long> {
	
	public User getByUsername(String username);
	public User getByEmail(String email);
	public String authAndToken(LoginForm form);
	public User authenticate(String username);
	
	public User getByFullnameAndEmail(String fullname, String email);
	public int getAllUserCount();
	public int getAllRegisteredUserLastMonthCount();

	public boolean existByUsername(String username);
	public boolean existByEmail(String email);
	public boolean existByPhone(String phone);
	public boolean canUseUsername(String username);
	public boolean canUseEmail(long id, String email);
	
	public User register(User user);
	public int update(User user);
	public void updateLastLoginDate(String username, String loginDate);
	
	public boolean resetPassword(PasswordResetForm passwordResetForm);
	public String generateTempPwd(String email);
	public boolean checkPasswordMatch(String checkPassword, String oldPassword);
	public void changePassword(UserPasswordChangeForm changePasswordForm);

	public List<User> getList(Map<String, Object> params);
}
