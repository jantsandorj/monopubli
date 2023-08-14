package kr.co.tagoplus.notification.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class MailTemplate extends GeneralVO {
	private static final long serialVersionUID = 7214293798631494423L;

	private Long seq;
	private String name;
	private String targetGroup;
	private String subject;
	private String content;
	private String itemDate;
	private String itemUserSeq;
	private String itemUsername;
	private String itemUserFullname;
	private String itemSiteName;
	private String itemSiteUrl;
	private String itemSitePhone;
	
	private String useYn;

	public Long getSeq() {
		return seq;
	}

	public void setSeq(Long seq) {
		this.seq = seq;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTargetGroup() {
		return targetGroup;
	}

	public void setTargetGroup(String targetGroup) {
		this.targetGroup = targetGroup;
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

	public String getItemDate() {
		return itemDate;
	}

	public void setItemDate(String itemDate) {
		this.itemDate = itemDate;
	}

	public String getItemUserSeq() {
		return itemUserSeq;
	}

	public void setItemUserSeq(String itemUserSeq) {
		this.itemUserSeq = itemUserSeq;
	}

	public String getItemUsername() {
		return itemUsername;
	}

	public void setItemUsername(String itemUsername) {
		this.itemUsername = itemUsername;
	}

	public String getItemUserFullname() {
		return itemUserFullname;
	}

	public void setItemUserFullname(String itemUserFullname) {
		this.itemUserFullname = itemUserFullname;
	}

	public String getItemSiteName() {
		return itemSiteName;
	}

	public void setItemSiteName(String itemSiteName) {
		this.itemSiteName = itemSiteName;
	}

	public String getItemSiteUrl() {
		return itemSiteUrl;
	}

	public void setItemSiteUrl(String itemSiteUrl) {
		this.itemSiteUrl = itemSiteUrl;
	}

	public String getItemSitePhone() {
		return itemSitePhone;
	}

	public void setItemSitePhone(String itemSitePhone) {
		this.itemSitePhone = itemSitePhone;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
}