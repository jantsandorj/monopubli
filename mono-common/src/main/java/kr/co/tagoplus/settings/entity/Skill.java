package kr.co.tagoplus.settings.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class Skill extends GeneralVO {
	private static final long serialVersionUID = -4115705189616769452L;

	private int seq;
	private String name;
	private String price;
	private String useYn;

	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
}