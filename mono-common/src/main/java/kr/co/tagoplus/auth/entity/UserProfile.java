package kr.co.tagoplus.auth.entity;

public class UserProfile {

    private Long userSeq;
	
    private String address;
    private String zipcode;
    private String birthday;
    private String memo;
    
	public Long getUserSeq() {
		return userSeq;
	}
	public String getAddress() {
		return address;
	}
	public String getZipcode() {
		return zipcode;
	}
	public String getBirthday() {
		return birthday;
	}
	public String getMemo() {
		return memo;
	}
	public void setUserSeq(Long userSeq) {
		this.userSeq = userSeq;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	
	@Override
	public String toString() {
		return "UserProfile [userSeq=" + userSeq + ", address=" + address + ", zipcode=" + zipcode + ", birthday="
				+ birthday + ", memo=" + memo + "]";
	}
}