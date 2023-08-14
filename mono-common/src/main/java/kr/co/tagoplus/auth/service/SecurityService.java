package kr.co.tagoplus.auth.service;

public interface SecurityService {
	public String findLoggedInUsername();
	public void autoLogin(String username, String password);

	public Boolean isAuthenticated();
	public Object getLoggedInUser();
}
