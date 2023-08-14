package kr.co.tagoplus.auth.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class User extends GeneralVO {
	private static final long serialVersionUID = -4458846125465974993L;

    private Long seq;
	
    private String username;
    
    @JsonIgnore
    private String password;
    private String fullname;
    private String email;
    private String phone;
    private String lastLoginDate;
    private long   fileGroupSeq;
    private String tempPwd;
    private String tempPwdCreDt;
    private String tempPwdEndDt;
    private String useYn;
    private String gender;
    private String mobile;
    private String job;
    private String zip;
    private String addr;
    private String addrEtc;
    private String birthday;
    private String introduction;
    private String memberTypeCd;
    private UserProfile profile;
    private List<FileDetail> imageAtch = new ArrayList<FileDetail>();

    private Company company;

	public Company getCompany() {
		return company;
	}
	public void setCompany(Company company) {
		this.company = company;
	}

	public Long getSeq() {
		return seq;
	}
	public String getUsername() {
		return username;
	}
	public String getPassword() {
		return password;
	}
	public String getFullname() {
		return fullname;
	}
	public String getEmail() {
		return email;
	}
	public String getPhone() {
		return phone;
	}
	public void setSeq(Long seq) {
		this.seq = seq;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public UserProfile getProfile() {
		return profile;
	}
	public void setProfile(UserProfile profile) {
		this.profile = profile;
	}
	
	public String getLastLoginDate() {
		return lastLoginDate;
	}
	public void setLastLoginDate(String lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}
	
	public long getFileGroupSeq() {
		return fileGroupSeq;
	}
	
	public void setFileGroupSeq(long fileGroupSeq) {
		this.fileGroupSeq = fileGroupSeq;
	}
	
	public List<FileDetail> getImageAtch() {
		return imageAtch;
	}
	
	public void setImageAtch(List<FileDetail> imageAtch) {
		this.imageAtch = imageAtch;
	}
	
	public String getTempPwd() {
		return tempPwd;
	}
	
	public void setTempPwd(String tempPwd) {
		this.tempPwd = tempPwd;
	}
	public String getTempPwdCreDt() {
		return tempPwdCreDt;
	}
	public void setTempPwdCreDt(String tempPwdCreDt) {
		this.tempPwdCreDt = tempPwdCreDt;
	}
	public String getTempPwdEndDt() {
		return tempPwdEndDt;
	}
	public void setTempPwdEndDt(String tempPwdEndDt) {
		this.tempPwdEndDt = tempPwdEndDt;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	@Override
	public String toString() {
		return "User [seq=" + seq + ", username=" + username + ", password=" + password + ", fullname=" + fullname
				+ ", email=" + email + ", phone=" + phone + ", lastLoginDate=" + lastLoginDate + ", fileGroupSeq="
				+ fileGroupSeq + ", imageAtch=" + imageAtch + "]";
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getAddrEtc() {
		return addrEtc;
	}
	public void setAddrEtc(String addrEtc) {
		this.addrEtc = addrEtc;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public String getMemberTypeCd() {return memberTypeCd;}
	public void setMemberTypeCd(String memberTypeCd) {this.memberTypeCd = memberTypeCd;}
}