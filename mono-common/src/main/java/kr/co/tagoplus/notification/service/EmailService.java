package kr.co.tagoplus.notification.service;

import java.util.Map;

import kr.co.tagoplus.notification.entity.Email;
import kr.co.tagoplus.notification.entity.MailHistory;

public interface EmailService {

	public boolean log(Email email);
	
	public boolean sendSimpleEmail(Email email);
	public void sendWithTemplate(Email email);
	public int sendWithTemplateWithUpdateHistory(Email email);
	public void sendWithTemplate(String recipient, String subject, String template, Map<String, Object> templateParams);
	public void sendAdminTempPassword(String email, String tempPass);

	public boolean send(MailHistory mailHistory);
}