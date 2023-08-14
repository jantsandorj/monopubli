package kr.co.tagoplus.notification.entity;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.common.util.DateUtil;

public class MailHistory extends GeneralVO {
	private static final long serialVersionUID = -5367310840767476121L;

	private Long seq;
	private Long mailTemplateSeq;
	private String targetGroup;
	private String groupId;
	private String sendType = "I";
	private String senderUsername;
	private Long receiverSeq;
	private String receiverUsername;
	private String receiverFullname;
	private String status;
	private String recipientCc;
	private String recipientBcc;
	private String subject;
	private String content;
	private String sendDate = DateUtil.getTimestampAsCompact();

	private String schedDate;
	
	public Long getSeq() {
		return seq;
	}

	public String getSchedDate() {
		return schedDate;
	}

	public void setSchedDate(String schedDate) {
		this.schedDate = schedDate;
	}

	public void setSeq(Long seq) {
		this.seq = seq;
	}
	public Long getMailTemplateSeq() {
		return mailTemplateSeq;
	}
	public void setMailTemplateSeq(Long mailTemplateSeq) {
		this.mailTemplateSeq = mailTemplateSeq;
	}
	public String getGroupId() {
		return groupId;
	}
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}
	public String getSendType() {
		return sendType;
	}
	public void setSendType(String sendType) {
		this.sendType = sendType;
	}
	public String getSenderUsername() {
		return senderUsername;
	}
	public void setSenderUsername(String senderUsername) {
		this.senderUsername = senderUsername;
	}
	public Long getReceiverSeq() {
		return receiverSeq;
	}
	public void setReceiverSeq(Long receiverSeq) {
		this.receiverSeq = receiverSeq;
	}
	public String getReceiverUsername() {
		return receiverUsername;
	}
	public void setReceiverUsername(String receiverUsername) {
		this.receiverUsername = receiverUsername;
	}
	public String getReceiverFullname() {
		return receiverFullname;
	}
	public void setReceiverFullname(String receiverFullname) {
		this.receiverFullname = receiverFullname;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRecipientCc() {
		return recipientCc;
	}
	public void setRecipientCc(String recipientCc) {
		this.recipientCc = recipientCc;
	}
	public String getRecipientBcc() {
		return recipientBcc;
	}
	public void setRecipientBcc(String recipientBcc) {
		this.recipientBcc = recipientBcc;
	}
	public String getSendDate() {
		return sendDate;
	}
	public void setSendDate(String sendDate) {
		this.sendDate = sendDate;
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
	public String getTargetGroup() {
		return targetGroup;
	}
	public void setTargetGroup(String targetGroup) {
		this.targetGroup = targetGroup;
	}
}