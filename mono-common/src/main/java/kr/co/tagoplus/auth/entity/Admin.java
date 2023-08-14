package kr.co.tagoplus.auth.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import kr.co.tagoplus.code.entity.Code;
import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class Admin extends GeneralVO {
	private static final long serialVersionUID = -4458846125465974993L;

	private Long seq;
	
    private String username;
    
    @JsonIgnore
    private String password;
    
    private String 	fullname;
    private String 	email;
    private String 	phone;
    private String 	lastLoginDate;
    private int 	failedLoginCount;
    private String 	tempPwd;
    private String 	tempPwdCreDt;
    private String 	tempPwdEndDt;
    private Long   	fileGroupSeq;
    private String 	useYn;
    private String 	mobile;
    private String 	taskInCharge;
    private String  authorCd;
    private String  countryCd;
    private String  levelCd;
    private String  positionCd;
    private String  adminNote;
	private String skill;
	private String adminType;

	private int projectNum;

	public int getProjectNum() {
		return projectNum;
	}

	public void setProjectNum(int projectNum) {
		this.projectNum = projectNum;
	}

	private List<Code> skillList = new ArrayList<>();

	public List<Code> getSkillList() {
		return skillList;
	}

	public void setSkillList(List<Code> skillList) {
		this.skillList = skillList;
	}

	public String getAdminType() {return adminType;}

	public void setAdminType(String adminType) {this.adminType = adminType;}

	public String getCountryCd() {return countryCd;}

	public void setCountryCd(String countryCd) {this.countryCd = countryCd;}

	public String getLevelCd() {return levelCd;}

	public void setLevelCd(String levelCd) {this.levelCd = levelCd;}

	public String getPositionCd() {return positionCd;}

	public void setPositionCd(String positionCd) {this.positionCd = positionCd;}

	public String getSkill() {return skill;}

	public void setSkill(String skill) {this.skill = skill;}

	public String getAdminNote() {return adminNote;}

	public void setAdminNote(String adminNote) {this.adminNote = adminNote;}

	private List<FileDetail> imageAtch = new ArrayList<FileDetail>();

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

	public String getLastLoginDate() {
		return lastLoginDate;
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
	public void setLastLoginDate(String lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}	
	public int getFailedLoginCount() {
		return failedLoginCount;
	}
	public void setFailedLoginCount(int failedLoginCount) {
		this.failedLoginCount = failedLoginCount;
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
	public Long getFileGroupSeq() {
		return fileGroupSeq;
	}
	public void setFileGroupSeq(Long fileGroupSeq) {
		this.fileGroupSeq = fileGroupSeq;
	}
	
	public List<FileDetail> getImageAtch() {
		return imageAtch;
	}
	public void setImageAtch(List<FileDetail> imageAtch) {
		this.imageAtch = imageAtch;
	}
	@Override
	public String toString() {
		return "Admin [seq=" + seq + ", username=" + username + ", password=" + password + ", fullname=" + fullname
				+ ", email=" + email + ", phone=" + phone + ", lastLoginDate=" + lastLoginDate + ", failedLoginCount="
				+ failedLoginCount + ", tempPwd=" + tempPwd + ", tempPwdCreDt=" + tempPwdCreDt + ", tempPwdEndDt="
				+ tempPwdEndDt + ", fileGroupSeq=" + fileGroupSeq + "]";
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getTaskInCharge() {
		return taskInCharge;
	}
	public void setTaskInCharge(String taskInCharge) {
		this.taskInCharge = taskInCharge;
	}
	public String getAuthorCd() {
		return authorCd;
	}
	public void setAuthorCd(String authorCd) {
		this.authorCd = authorCd;
	}

}