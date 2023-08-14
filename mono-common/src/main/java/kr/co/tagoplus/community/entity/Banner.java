package kr.co.tagoplus.community.entity;

import java.util.ArrayList;
import java.util.List;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;
public class Banner extends GeneralVO {
	private static final long serialVersionUID = 8969142770151472689L;

	private int seq;
	private String 	bannerNm;
	private String  type;
	private String  mediaType;
	private String  linkYn;
	private String  windowYn;
	private String  link;
	private String  imageAlt;
	private String  mainText;
	private String  subText;
	private String  startDate;
	private String  endDate;
	private int 	sortNo;
	private String  useYn;
	private String 	isDeleted;
	private long  createdBy;
	private long  modifiedBy;
	private String  mediaTypeNm;
	private String  bannerTypeNm;
	private long    pcFileGroupSeq;
	private long    mobileFileGroupSeq;
	
	private List<FileDetail> pcImageAtch = new ArrayList<FileDetail>();
	private List<FileDetail> mobileImageAtch = new ArrayList<FileDetail>();
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getBannerNm() {
		return bannerNm;
	}
	public void setBannerNm(String bannerNm) {
		this.bannerNm = bannerNm;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getMediaType() {
		return mediaType;
	}
	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}
	public String getLinkYn() {
		return linkYn;
	}
	public void setLinkYn(String linkYn) {
		this.linkYn = linkYn;
	}
	public String getWindowYn() { return windowYn;	}
	public void setWindowYn(String windowYn) {
		this.windowYn = windowYn;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getImageAlt() {
		return imageAlt;
	}
	public void setImageAlt(String imageAlt) {
		this.imageAlt = imageAlt;
	}
	public String getMainText() {
		return mainText;
	}
	public void setMainText(String mainText) {
		this.mainText = mainText;
	}
	public String getSubText() {
		return subText;
	}
	public void setSubText(String subText) {
		this.subText = subText;
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
	public int getSortNo() {
		return sortNo;
	}
	public void setSortNo(int sortNo) {
		this.sortNo = sortNo;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}
	public void setCreatedBy(long createdBy) {
		this.createdBy = createdBy;
	}
	public Long getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(long modifiedBy) {
		this.modifiedBy = modifiedBy;
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
	public String getMediaTypeNm() {
		return mediaTypeNm;
	}
	public void setMediaTypeNm(String mediaTypeNm) {
		this.mediaTypeNm = mediaTypeNm;
	}
	public String getBannerTypeNm() {
		return bannerTypeNm;
	}
	public void setBannerTypeNm(String bannerTypeNm) {
		this.bannerTypeNm = bannerTypeNm;
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
}
