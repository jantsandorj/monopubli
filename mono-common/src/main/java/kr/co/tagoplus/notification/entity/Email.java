package kr.co.tagoplus.notification.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

import kr.co.tagoplus.common.util.DateUtil;

public class Email implements Serializable {
	private static final long serialVersionUID = -3561125276062181027L;
	
	public enum PURPOSE {
		EMAIl_VALIDATION
	}
	
	private long id;

	@Transient
	public String[] recipientList;
	
	public String recipient;
	public String senderEmail = "cmstago@gmail.com";
	public String subject;
	public String content;
	public String token;
	public PURPOSE purpose;
	private String sentDate = DateUtil.getTimestampAsCompact();
	private String expireDate = DateUtil.getDelayedTimestampAsCompact(30);
	
	@Transient
	public List<MultipartFile> attachments;
	
	public String templateName = "email-validation";
	
	@Transient
	public Map<String, Object> templateParams;

	public Email() {
	}
	
	public Email(String recipient, String subject, String templateName, Map<String, Object> templateParams) {
		this.recipient = recipient;
		this.recipientList = new String[] { recipient };
		this.subject = subject;
		this.templateName = templateName;
		this.templateParams = templateParams;
	}

	public String[] getRecipientList() {
		return recipientList;
	}
	public void setRecipientList(String[] recipientList) {
		this.recipientList = recipientList;
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
	public List<MultipartFile> getAttachments() {
		return attachments;
	}
	public void setAttachments(List<MultipartFile> attachments) {
		this.attachments = attachments;
	}
	public String getSenderEmail() {
		return senderEmail;
	}
	public void setSenderEmail(String senderEmail) {
		this.senderEmail = senderEmail;
	}
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	public Map<String, Object> getTemplateParams() {
		return templateParams;
	}
	public void setTemplateParams(Map<String, Object> templateParams) {
		this.templateParams = templateParams;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public PURPOSE getPurpose() {
		return purpose;
	}
	public void setPurpose(PURPOSE purpose) {
		this.purpose = purpose;
	}
	public String getSentDate() {
		return sentDate;
	}
	public void setSentDate(String sentDate) {
		this.sentDate = sentDate;
	}
	public String getRecipient() {
		return recipient;
	}
	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}
	public String getExpireDate() {
		return expireDate;
	}
	public void setExpireDate(String expireDate) {
		this.expireDate = expireDate;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
}
