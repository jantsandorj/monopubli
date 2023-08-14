package kr.co.tagoplus.auth.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class AuthorInfo extends GeneralVO {
	private static final long serialVersionUID = 8969142770151472689L;

	private String authorCd;
	private String authorNm;
	private String authorDesc;
	private String useYn;
	
	public String getAuthorCd() {
		return authorCd;
	}
	public void setAuthorCd(String authorCd) {
		this.authorCd = authorCd;
	}
	public String getAuthorNm() {
		return authorNm;
	}
	public void setAuthorNm(String authorNm) {
		this.authorNm = authorNm;
	}
	public String getAuthorDesc() {
		return authorDesc;
	}
	public void setAuthorDesc(String authorDesc) {
		this.authorDesc = authorDesc;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
}
