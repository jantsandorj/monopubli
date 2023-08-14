package kr.co.tagoplus.auth.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class MenuContent extends GeneralVO {
	private static final long serialVersionUID = 8969142770151472689L;

	private int seq;
	private String menuId;
	private String content;
	private String useYn;
	private long   fileGroupSeq;
	private String isDeleted;
	private String menuName;
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public long getFileGroupSeq() {
		return fileGroupSeq;
	}
	public void setFileGroupSeq(long fileGroupSeq) {
		this.fileGroupSeq = fileGroupSeq;
	}
	public String getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
}
