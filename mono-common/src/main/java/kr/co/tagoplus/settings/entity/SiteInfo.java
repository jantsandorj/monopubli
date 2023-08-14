package kr.co.tagoplus.settings.entity;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class SiteInfo extends GeneralVO {
	private static final long serialVersionUID = -4458846125465974993L;

	private Long 	siteSeq;
    private String  siteNm;
    private String 	siteUrl;
    private String 	contactTel;
    private String 	contactEmail;
    private String 	contactMobile;
    private String 	zip;
    private String 	addr;
    private String 	addrEtc;
    private String 	copyright;
    private long    favFileGroupSeq;
	private long    headerFileGroupSeq;
	private long    footerFileGroupSeq;
	private String 	footerContent;
	private String 	termsUse;
	private String 	privacyPolicy;
	private FileDetail atchFav;
    private FileDetail atchHeader;
    private FileDetail atchFooter;
	
    public Long getSiteSeq() {
		return siteSeq;
	}
	public void setSiteSeq(Long siteSeq) {
		this.siteSeq = siteSeq;
	}
	public String getSiteNm() {
		return siteNm;
	}
	public void setSiteNm(String siteNm) {
		this.siteNm = siteNm;
	}
	public String getSiteUrl() {
		return siteUrl;
	}
	public void setSiteUrl(String siteUrl) {
		this.siteUrl = siteUrl;
	}
	public String getContactTel() {
		return contactTel;
	}
	public void setContactTel(String contactTel) {
		this.contactTel = contactTel;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public String getContactMobile() {
		return contactMobile;
	}
	public void setContactMobile(String contactMobile) {
		this.contactMobile = contactMobile;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getAddrEtc() {
		return addrEtc;
	}
	public void setAddrEtc(String addrEtc) {
		this.addrEtc = addrEtc;
	}
	public String getCopyright() {
		return copyright;
	}
	public void setCopyright(String copyright) {
		this.copyright = copyright;
	}
	public long getFavFileGroupSeq() {
		return favFileGroupSeq;
	}
	public void setFavFileGroupSeq(long favFileGroupSeq) {
		this.favFileGroupSeq = favFileGroupSeq;
	}
	public long getHeaderFileGroupSeq() {
		return headerFileGroupSeq;
	}
	public void setHeaderFileGroupSeq(long headerFileGroupSeq) {
		this.headerFileGroupSeq = headerFileGroupSeq;
	}
	public long getFooterFileGroupSeq() {
		return footerFileGroupSeq;
	}
	public void setFooterFileGroupSeq(long footerFileGroupSeq) {
		this.footerFileGroupSeq = footerFileGroupSeq;
	}
	public String getFooterContent() {
		return footerContent;
	}
	public void setFooterContent(String footerContent) {
		this.footerContent = footerContent;
	}
	public String getTermsUse() {
		return termsUse;
	}
	public void setTermsUse(String termsUse) {
		this.termsUse = termsUse;
	}
	public String getPrivacyPolicy() {
		return privacyPolicy;
	}
	public void setPrivacyPolicy(String privacyPolicy) {
		this.privacyPolicy = privacyPolicy;
	}
	public FileDetail getAtchFav() {
		return atchFav;
	}
	public void setAtchFav(FileDetail atchFav) {
		this.atchFav = atchFav;
	}
	public FileDetail getAtchHeader() {
		return atchHeader;
	}
	public void setAtchHeader(FileDetail atchHeader) {
		this.atchHeader = atchHeader;
	}
	public FileDetail getAtchFooter() {
		return atchFooter;
	}
	public void setAtchFooter(FileDetail atchFooter) {
		this.atchFooter = atchFooter;
	}

}