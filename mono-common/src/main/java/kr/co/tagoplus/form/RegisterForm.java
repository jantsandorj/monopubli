package kr.co.tagoplus.form;

import org.springframework.web.multipart.MultipartFile;

public class RegisterForm { 
	
	private String authority = "AUTH_BUYER";
	
	//사진
	private MultipartFile photo;
	private String photoUrl;
	
	//학교명
	private String partnereristyName;
	
	//이름
	private String fullname;
		
	//성별
	private String gender;

	//생년월일
	private String birthday;

	//나이
	private int age;
	
	//휴대폰번호
	private String mobile;
	
	//이메일
	private String email;
	
	//희망진로기간
	private String buyerStartDate;
	private String buyerEndDate;
	
	//아이디	
	private String username;
	
	//비밀번호
	private String password;
	
	//비밀번호 확인
	private String passwordConfirm;
	
	//멘토 구분 (현직자, 강사)
	private String buyerType;
	
	//기업형태
	private String companyType;
	
	//담당직무
	private String companyResponsibility;
	
	//재직중인 회사명
	private String companyName;
	
	//소속부서(팀)명 비노출
	private String companyDepartment;

	//소속부서(팀)명 노출
	private String companyDepartmentPublic;
	
	//직급
	private String position;
	
	//졸업대학
	private String partner;	
		
	//전공학과
	private String partnerDepartment;
	
	//주요경력
	private String major;

	//강사
	//소속기업
	private String professorCompany;
	//직책
	private String professorPosition;
	//학력
	private String professorEducation;
	//강의 경력
	private int professorExperience;
	//대표강의분야
	private String professorField;
	//파일첨부
	private MultipartFile professorAttachment;
	private String professorAttachmentUrl;

	//멘토소개
	private String introduction;
	
	//멘토링 계획및 목표
	private String planAndGoal;
	
	//기타사항
	private String additionalInfo;
	
	private String recommender;

	//소속 기업명
	private String realCompanyName;

	//증빙서류
	private MultipartFile document;
	private String documentUrl;

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

	public String getPartnereristyName() {
		return partnereristyName;
	}

	public void setPartnereristyName(String partnereristyName) {
		this.partnereristyName = partnereristyName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBuyerStartDate() {
		return buyerStartDate;
	}

	public void setBuyerStartDate(String buyerStartDate) {
		this.buyerStartDate = buyerStartDate;
	}

	public String getBuyerEndDate() {
		return buyerEndDate;
	}

	public void setBuyerEndDate(String buyerEndDate) {
		this.buyerEndDate = buyerEndDate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswordConfirm() {
		return passwordConfirm;
	}

	public void setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
	}

	public String getBuyerType() {
		return buyerType;
	}

	public void setBuyerType(String buyerType) {
		this.buyerType = buyerType;
	}

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public String getCompanyResponsibility() {
		return companyResponsibility;
	}

	public void setCompanyResponsibility(String companyResponsibility) {
		this.companyResponsibility = companyResponsibility;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyDepartment() {
		return companyDepartment;
	}

	public String getCompanyDepartmentPublic() {
		return companyDepartmentPublic;
	}

	public void setCompanyDepartmentPublic(String companyDepartmentPublic) {
		this.companyDepartmentPublic = companyDepartmentPublic;
	}

	public void setCompanyDepartment(String companyDepartment) {
		this.companyDepartment = companyDepartment;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getPartner() {
		return partner;
	}

	public void setPartner(String partner) {
		this.partner = partner;
	}

	public String getPartnerDepartment() {
		return partnerDepartment;
	}

	public void setPartnerDepartment(String partnerDepartment) {
		this.partnerDepartment = partnerDepartment;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}

	public String getPlanAndGoal() {
		return planAndGoal;
	}

	public void setPlanAndGoal(String planAndGoal) {
		this.planAndGoal = planAndGoal;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public MultipartFile getPhoto() {
		return photo;
	}

	public void setPhoto(MultipartFile photo) {
		this.photo = photo;
	}

	public MultipartFile getDocument() {
		return document;
	}

	public void setDocument(MultipartFile document) {
		this.document = document;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getDocumentUrl() {
		return documentUrl;
	}

	public void setDocumentUrl(String documentUrl) {
		this.documentUrl = documentUrl;
	}

	public String getProfessorCompany() {
		return professorCompany;
	}

	public void setProfessorCompany(String professorCompany) {
		this.professorCompany = professorCompany;
	}

	public String getProfessorPosition() {
		return professorPosition;
	}

	public void setProfessorPosition(String professorPosition) {
		this.professorPosition = professorPosition;
	}

	public String getProfessorEducation() {
		return professorEducation;
	}

	public void setProfessorEducation(String professorEducation) {
		this.professorEducation = professorEducation;
	}

	public int getProfessorExperience() {
		return professorExperience;
	}

	public void setProfessorExperience(int professorExperience) {
		this.professorExperience = professorExperience;
	}

	public String getProfessorField() {
		return professorField;
	}

	public void setProfessorField(String professorField) {
		this.professorField = professorField;
	}

	public MultipartFile getProfessorAttachment() {
		return professorAttachment;
	}

	public void setProfessorAttachment(MultipartFile professorAttachment) {
		this.professorAttachment = professorAttachment;
	}

	public String getProfessorAttachmentUrl() {
		return professorAttachmentUrl;
	}

	public void setProfessorAttachmentUrl(String professorAttachmentUrl) {
		this.professorAttachmentUrl = professorAttachmentUrl;
	}

	public String getRecommender() {
		return recommender;
	}

	public void setRecommender(String recommender) {
		this.recommender = recommender;
	}

	public String getRealCompanyName() {
		return realCompanyName;
	}

	public void setRealCompanyName(String realCompanyName) {
		this.realCompanyName = realCompanyName;
	}
}