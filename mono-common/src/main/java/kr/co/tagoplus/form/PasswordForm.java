package kr.co.tagoplus.form;

public class PasswordForm {
	
	private String oldPassword;
	private String oldPasswordConfirm;
	private String newPassword;
	private String newPasswordConfirm;
	
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getOldPasswordConfirm() {
		return oldPasswordConfirm;
	}
	public void setOldPasswordConfirm(String oldPasswordConfirm) {
		this.oldPasswordConfirm = oldPasswordConfirm;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getNewPasswordConfirm() {
		return newPasswordConfirm;
	}
	public void setNewPasswordConfirm(String newPasswordConfirm) {
		this.newPasswordConfirm = newPasswordConfirm;
	}
}
