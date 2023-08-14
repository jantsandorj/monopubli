package kr.co.tagoplus.popup.entity;

import java.util.ArrayList;
import java.util.List;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class Popup extends GeneralVO {
	private static final long serialVersionUID = -6079574180916730397L;

	private Long seq;
    private String subject;
    private String content;
    private String popupType;
    private String startDate;
    private String endDate;
	private String sortNo;
    private String linkYn;
	private String  windowYn;
    private String linkUrl;
    private String imageDesc;
    private int positionX;
    private int positionY;
    private int width;
    private int height;
    private String useYn;
	private String popupTypeNm;
    private long    pcFileGroupSeq;
	private long    mobileFileGroupSeq;
	
	private List<FileDetail> pcImageAtch = new ArrayList<FileDetail>();
	private List<FileDetail> mobileImageAtch = new ArrayList<FileDetail>();
    
	public Long getSeq() {
		return seq;
	}
	public void setSeq(Long seq) {
		this.seq = seq;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getPopupType() {
		return popupType;
	}
	public void setPopupType(String popupType) {
		this.popupType = popupType;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getSortNo() {
		return sortNo;
	}
	public void setSortNo(String sortNo) {
		this.sortNo = sortNo;
	}
	public String getLinkYn() {
		return linkYn;
	}
	public void setLinkYn(String linkYn) {
		this.linkYn = linkYn;
	}
	public String getWindowYn() {
		return windowYn;
	}
	public void setWindowYn(String windowYn) {
		this.windowYn = windowYn;
	}
	public String getLinkUrl() {
		return linkUrl;
	}
	public void setLinkUrl(String linkUrl) {
		this.linkUrl = linkUrl;
	}
	public String getImageDesc() {
		return imageDesc;
	}
	public void setImageDesc(String imageDesc) {
		this.imageDesc = imageDesc;
	}
	public int getPositionX() {
		return positionX;
	}
	public void setPositionX(int positionX) {
		this.positionX = positionX;
	}
	public int getPositionY() {
		return positionY;
	}
	public void setPositionY(int positionY) {
		this.positionY = positionY;
	}
	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public long getPcFileGroupSeq() {
		return pcFileGroupSeq;
	}
	public void setPcFileGroupSeq(long pcFileGroupSeq) {
		this.pcFileGroupSeq = pcFileGroupSeq;
	}
	public long getMobileFileGroupSeq() {
		return mobileFileGroupSeq;
	}
	public void setMobileFileGroupSeq(long mobileFileGroupSeq) {
		this.mobileFileGroupSeq = mobileFileGroupSeq;
	}
	public List<FileDetail> getPcImageAtch() {
		return pcImageAtch;
	}
	public void setPcImageAtch(List<FileDetail> pcImageAtch) {
		this.pcImageAtch = pcImageAtch;
	}
	public List<FileDetail> getMobileImageAtch() {
		return mobileImageAtch;
	}
	public void setMobileImageAtch(List<FileDetail> mobileImageAtch) {
		this.mobileImageAtch = mobileImageAtch;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getPopupTypeNm() {
		return popupTypeNm;
	}
	public void setPopupTypeNm(String popupTypeNm) {
		this.popupTypeNm = popupTypeNm;
	}
}
