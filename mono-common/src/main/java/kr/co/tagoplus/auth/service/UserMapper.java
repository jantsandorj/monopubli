package kr.co.tagoplus.auth.service;

import java.util.List;
import java.util.Map;

import kr.co.tagoplus.auth.entity.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.common.service.GenericMapper;

@Mapper
public interface UserMapper extends GenericMapper<User, Long> {
	
	public List<User> getByFilter(Map<String, Object> parameters);
	
	public User authenticate(String username);
	public User getByFullnameAndEmail(@Param("fullname") String fullname, @Param("email") String email);
	public int getAllUserCount();
	public int getAllRegisteredUserLastMonthCount(String validDate);
	public List<User> getUserListWithRoleId(int roleId);
	public List<User> getUserListWithoutRoleId(int roleId);

	public boolean existByEmail(String email);	
	public boolean canUseUsername(@Param("username") String username);
	public boolean canUseEmail(@Param("username") long username, @Param("email") String email);
	
	public void updateLastLoginDate(@Param("username") String username, @Param("loginDate") String loginDate);
	public int update(User user);
	
	public boolean resetPassword(@Param("username") String username, @Param("password") String password);
	public int deleteById(@Param("seq") long seq);

	public List<Menu> getParentListId();

	public User getByUsername(String username);

	public boolean existByUsername(String username);
	public boolean existByPhone(String phone);
	public User getByEmail(String email);
	public List<User> getList(Map<String, Object> params);
}