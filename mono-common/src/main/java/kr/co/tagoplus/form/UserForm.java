package kr.co.tagoplus.form;

import kr.co.tagoplus.auth.entity.Company;

import kr.co.tagoplus.auth.entity.User;

public class UserForm extends User{
	private Long companySeq;
	private Long userSeq;
	private String name;
	private String ceoName;
	private String personInCharge;
	private String registerNumber;
	private String companyPhone;
	private String companyEmail;
	private long  fileGroupSeq;

	public Long getCompanySeq() {
		return companySeq;
	}

	public void setCompanySeq(Long companySeq) {
		this.companySeq = companySeq;
	}

	public Long getUserSeq() {
		return userSeq;
	}

	public void setUserSeq(Long userSeq) {
		this.userSeq = userSeq;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCeoName() {
		return ceoName;
	}

	public void setCeoName(String ceoName) {
		this.ceoName = ceoName;
	}

	public String getPersonInCharge() {
		return personInCharge;
	}

	public void setPersonInCharge(String personInCharge) {
		this.personInCharge = personInCharge;
	}

	public String getRegisterNumber() {
		return registerNumber;
	}

	public void setRegisterNumber(String registerNumber) {
		this.registerNumber = registerNumber;
	}

	public String getCompanyPhone() {
		return companyPhone;
	}

	public void setCompanyPhone(String companyPhone) {
		this.companyPhone = companyPhone;
	}

	public String getCompanyEmail() {
		return companyEmail;
	}

	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}

	public long getFileGroupSeq() {
		return fileGroupSeq;
	}

	public void setFileGroupSeq(long fileGroupSeq) {
		this.fileGroupSeq = fileGroupSeq;
	}

	public User getUser(UserForm userForm){
		User user = new User();
		user.setSeq(userForm.getSeq());
		user.setMemberTypeCd(userForm.getMemberTypeCd());
		user.setUsername(userForm.getUsername());
		user.setFullname(userForm.getFullname());
		user.setPassword(userForm.getPassword());
		user.setPhone(userForm.getPhone());
		user.setEmail(userForm.getEmail());
		user.setZip(userForm.getZip());
		user.setAddr(userForm.getAddr());
		user.setAddrEtc(userForm.getAddrEtc());

		return user;
	}

	public Company getCompany(UserForm userForm){
		Company company = new Company();
		company.setSeq(userForm.getCompanySeq());
		company.setUserSeq(userForm.getUserSeq());
		company.setName(userForm.getName());
		company.setCeoName(userForm.getCeoName());
		company.setPersonInCharge(userForm.getPersonInCharge());
		company.setRegisterNumber(userForm.getRegisterNumber());
		company.setCompanyPhone(userForm.getCompanyPhone());
		company.setCompanyEmail(userForm.getCompanyEmail());
		company.setFileGroupSeq(userForm.getFileGroupSeq());

		return company;
	}
	
//    private String username;
//    private String fullname;
//    private String password;
//    private String tempPwd;
//    private String tempPwdCreDt;
//    private String empNo;
//	private String deptNm;
//	private String titleNm;
//    private String position;
//	private String email;
//    private String duty;
//    private String lastLoginDate;
//    private String mainJobCd;
//    private String actionType = "add";
//	private String authority = "AUTH_USER";
//	private long authorityId = 0L;
//	private String photoUrl;
//	private MultipartFile photo;
//
//	public UserForm() {
//	}
//
//	public UserForm(User user) {
//	}
//
//	public String getUsername() {
//		return username;
//	}
//
//	public String getFullname() {
//		return fullname;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public String getTempPwd() {
//		return tempPwd;
//	}
//
//	public String getEmpNo() {
//		return empNo;
//	}
//
//	public String getDeptNm() {
//		return deptNm;
//	}
//
//	public String getPosition() {
//		return position;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public String getDuty() {
//		return duty;
//	}
//
//	public String getLastLoginDt() {
//		return lastLoginDate;
//	}
//
//	public String getAuthority() {
//		return authority;
//	}
//
//	public long getAuthorityId() {
//		return authorityId;
//	}
//
//	public String getPhotoUrl() {
//		return photoUrl;
//	}
//
//	public MultipartFile getPhoto() {
//		return photo;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public void setFullname(String fullname) {
//		this.fullname = fullname;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public void setTempPwd(String tempPwd) {
//		this.tempPwd = tempPwd;
//	}
//
//	public void setEmpNo(String empNo) {
//		this.empNo = empNo;
//	}
//
//	public void setDeptNm(String deptNm) {
//		this.deptNm = deptNm;
//	}
//
//	public void setPosition(String position) {
//		this.position = position;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public void setDuty(String duty) {
//		this.duty = duty;
//	}
//
//	public void setLastLoginDt(String lastLoginDate) {
//		this.lastLoginDate = lastLoginDate;
//	}
//
//	public void setAuthority(String authority) {
//		this.authority = authority;
//	}
//
//	public void setAuthorityId(long authorityId) {
//		this.authorityId = authorityId;
//	}
//
//	public void setPhotoUrl(String photoUrl) {
//		this.photoUrl = photoUrl;
//	}
//
//	public void setPhoto(MultipartFile photo) {
//		this.photo = photo;
//	}
//
//	public String getActionType() {
//		return actionType;
//	}
//
//	public void setActionType(String actionType) {
//		this.actionType = actionType;
//	}
//
//	public String getTempPwdCreDt() {return tempPwdCreDt;}
//
//	public void setTempPwdCreDt(String tempPwdCreDt) {this.tempPwdCreDt = tempPwdCreDt; }
//
//	public String getMainJobCd() {return mainJobCd;}
//
//	public void setMainJobCd(String mainJobCd) {this.mainJobCd = mainJobCd;}
//
//	public String getTitleNm() {return titleNm;	}
//
//	public void setTitleNm(String titleNm) {this.titleNm = titleNm;	}
}