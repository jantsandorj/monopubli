package kr.co.tagoplus.form;


//there is similar form for admin project that is used in HTTP request
//this form is used for rest requests
public class PasswordResetForm {
    
    private String newPassword;
    private String newPasswordConfirm;
    private String token;
    private String fullname;
    private String mobile;
    private String email;

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
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
