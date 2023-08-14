package kr.co.tagoplus.code.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class Code extends GeneralVO {
    private static final long serialVersionUID = -1663139795064991718L;

    private Long seq;
    private String codeGroup;
    private String codeGroupNm;
    private String code;
    private String codeNm;
    private String codeEngNm;
    private String codeDescript;
    private String useYn;
    private Long orderNo;
    private String isActive;
    
	public Long getSeq() {
		return seq;
	}
	public void setSeq(Long seq) {
		this.seq = seq;
	}
	public String getCodeGroup() {
		return codeGroup;
	}
	public void setCodeGroup(String codeGroup) {
		this.codeGroup = codeGroup;
	}
	public String getCodeGroupNm() {
		return codeGroupNm;
	}
	public void setCodeGroupNm(String codeGroupNm) {
		this.codeGroupNm = codeGroupNm;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getCodeNm() {
		return codeNm;
	}
	public void setCodeNm(String codeNm) {
		this.codeNm = codeNm;
	}
	public String getCodeEngNm() {
		return codeEngNm;
	}
	public void setCodeEngNm(String codeEngNm) {
		this.codeEngNm = codeEngNm;
	}
	public String getCodeDescript() {
		return codeDescript;
	}
	public void setCodeDescript(String codeDescript) {
		this.codeDescript = codeDescript;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public Long getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(Long orderNo) {
		this.orderNo = orderNo;
	}
	public String getIsActive() {
		return isActive;
	}
	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
}