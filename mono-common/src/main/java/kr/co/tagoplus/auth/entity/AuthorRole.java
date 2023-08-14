package kr.co.tagoplus.auth.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class AuthorRole extends GeneralVO {
	private static final long serialVersionUID = 8969142770151472689L;

	private String menuSeq;
	private String authorCd;
	public String getMenuSeq() {
		return menuSeq;
	}
	public void setMenuSeq(String menuSeq) {
		this.menuSeq = menuSeq;
	}
	public String getAuthorCd() {
		return authorCd;
	}
	public void setAuthorCd(String authorCd) {
		this.authorCd = authorCd;
	}
}
