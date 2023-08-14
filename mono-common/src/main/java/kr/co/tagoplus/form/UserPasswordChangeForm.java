package kr.co.tagoplus.form;

public class UserPasswordChangeForm {
    
	private String username;
	private int passwordChangeStrength;
	private String password;
    private String passwordCheck;
    private String returnUrl;
    
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getPasswordChangeStrength() {
		return passwordChangeStrength;
	}
	public void setPasswordChangeStrength(int passwordChangeStrength) {
		this.passwordChangeStrength = passwordChangeStrength;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordCheck() {
		return passwordCheck;
	}
	public void setPasswordCheck(String passwordCheck) {
		this.passwordCheck = passwordCheck;
	}
	public String getReturnUrl() {
		return returnUrl;
	}
	public void setReturnUrl(String returnUrl) {
		this.returnUrl = returnUrl;
	}
}