package kr.co.tagoplus.settings.entity;

import kr.co.tagoplus.common.util.DateUtil;

public class SystemSettings {
	private static final long serialVersionUID = -4070560935534606033L;

	private int siteSeq;
	private String adminSessionTimeYn;
	private int adminSessionTime;
	private String adminPasschangeCycleYn;
	private int adminPasschangeCycle;
	private String adminAccessIpYn;
	private String adminAccessIp;
	private String userSessionTimeYn;
	private int userSessionTime;
	private String userPasschangeCycleYn;
	private int userPasschangeCycle;
	private String modifiedDate = DateUtil.getTimestampAsCompact();
	private String modifiedBy;
	private String googleYn;
	private String googleAccToken;
	private String facebookYn;
	private String facebookAccToken;
	private String naverYn;
	private String naverAccToken;
	private String kakaoYn;
	private String kakaoAccToken;

	public int getSiteSeq() {
		return siteSeq;
	}

	public void setSiteSeq(int siteSeq) {
		this.siteSeq = siteSeq;
	}

	public String getAdminSessionTimeYn() {
		return adminSessionTimeYn;
	}

	public void setAdminSessionTimeYn(String adminSessionTimeYn) {
		this.adminSessionTimeYn = adminSessionTimeYn;
	}

	public int getAdminSessionTime() {
		return adminSessionTime;
	}

	public void setAdminSessionTime(int adminSessionTime) {
		this.adminSessionTime = adminSessionTime;
	}

	public String getAdminPasschangeCycleYn() {
		return adminPasschangeCycleYn;
	}

	public void setAdminPasschangeCycleYn(String adminPasschangeCycleYn) {
		this.adminPasschangeCycleYn = adminPasschangeCycleYn;
	}

	public int getAdminPasschangeCycle() {
		return adminPasschangeCycle;
	}

	public void setAdminPasschangeCycle(int adminPasschangeCycle) {
		this.adminPasschangeCycle = adminPasschangeCycle;
	}

	public String getAdminAccessIpYn() {
		return adminAccessIpYn;
	}

	public void setAdminAccessIpYn(String adminAccessIpYn) {
		this.adminAccessIpYn = adminAccessIpYn;
	}

	public String getAdminAccessIp() {
		return adminAccessIp;
	}

	public void setAdminAccessIp(String adminAccessIp) {
		this.adminAccessIp = adminAccessIp;
	}

	public String getUserSessionTimeYn() {
		return userSessionTimeYn;
	}

	public void setUserSessionTimeYn(String userSessionTimeYn) {
		this.userSessionTimeYn = userSessionTimeYn;
	}

	public int getUserSessionTime() {
		return userSessionTime;
	}

	public void setUserSessionTime(int userSessionTime) {
		this.userSessionTime = userSessionTime;
	}

	public String getUserPasschangeCycleYn() {
		return userPasschangeCycleYn;
	}

	public void setUserPasschangeCycleYn(String userPasschangeCycleYn) {
		this.userPasschangeCycleYn = userPasschangeCycleYn;
	}

	public int getUserPasschangeCycle() {
		return userPasschangeCycle;
	}

	public void setUserPasschangeCycle(int userPasschangeCycle) {
		this.userPasschangeCycle = userPasschangeCycle;
	}

	public String getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(String modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public String getGoogleYn() {
		return googleYn;
	}

	public void setGoogleYn(String googleYn) {
		this.googleYn = googleYn;
	}

	public String getGoogleAccToken() {
		return googleAccToken;
	}

	public void setGoogleAccToken(String googleAccToken) {
		this.googleAccToken = googleAccToken;
	}

	public String getFacebookYn() {
		return facebookYn;
	}

	public void setFacebookYn(String facebookYn) {
		this.facebookYn = facebookYn;
	}

	public String getFacebookAccToken() {
		return facebookAccToken;
	}

	public void setFacebookAccToken(String facebookAccToken) {
		this.facebookAccToken = facebookAccToken;
	}

	public String getNaverYn() {
		return naverYn;
	}

	public void setNaverYn(String naverYn) {
		this.naverYn = naverYn;
	}

	public String getNaverAccToken() {
		return naverAccToken;
	}

	public void setNaverAccToken(String naverAccToken) {
		this.naverAccToken = naverAccToken;
	}

	public String getKakaoYn() {
		return kakaoYn;
	}

	public void setKakaoYn(String kakaoYn) {
		this.kakaoYn = kakaoYn;
	}

	public String getKakaoAccToken() {
		return kakaoAccToken;
	}

	public void setKakaoAccToken(String kakaoAccToken) {
		this.kakaoAccToken = kakaoAccToken;
	}
}