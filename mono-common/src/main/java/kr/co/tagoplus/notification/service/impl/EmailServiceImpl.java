package kr.co.tagoplus.notification.service.impl;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import kr.co.tagoplus.notification.service.MailHistoryService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import kr.co.tagoplus.notification.entity.Email;
import kr.co.tagoplus.notification.entity.MailHistory;
import kr.co.tagoplus.notification.service.EmailService;
import kr.co.tagoplus.notification.util.CustomMailSender;

@Service
@Transactional("transactionManager")
public class EmailServiceImpl implements EmailService {

	@Autowired
	private CustomMailSender customMailSender;
	
	@Autowired
    private SpringTemplateEngine templateEngine;

	@Override
	public boolean sendSimpleEmail(Email email) {
		if(email == null) {
			return false;
		}
		
		String[] recipientList = email.getRecipientList();
		if(recipientList == null || recipientList.length == 0) {
			if(!StringUtils.isBlank(email.getRecipient())) {
				String[] newRecipientList = new String[] {email.getRecipient()};
				
				recipientList = newRecipientList;
			}
		}
		
		JavaMailSenderImpl mailSender = customMailSender.builder();
		var mailMessage = new SimpleMailMessage();
		try {
			mailMessage.setSubject(email.getSubject());
			mailMessage.setFrom("cmstago@gmail.com");
			mailMessage.setText(email.getContent());
			mailMessage.setTo(recipientList);
           
			mailSender.send(mailMessage);
			log(email);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return false;
	}
	
	@Async
	@Override
	public void sendWithTemplate(Email email) {
		if(email != null && email.getRecipientList() != null && email.getRecipientList().length != 0) {
			JavaMailSenderImpl mailSender = customMailSender.builder();
			MimeMessage message = mailSender.createMimeMessage();
			
	        try {
				MimeMessageHelper helper = new MimeMessageHelper(message,
				        MimeMessageHelper.MULTIPART_MODE_NO,
				        StandardCharsets.UTF_8.name());
				
				Context context = new Context();
		        context.setVariables(email.getTemplateParams());
		    
		        String html = templateEngine.process(email.getTemplateName(), context);
		        helper.setTo(email.getRecipientList());
		        helper.setText(html, true);
		        helper.setSubject(email.getSubject());
		        helper.setFrom(email.getSenderEmail());

		        mailSender.send(message);
		        //log(email);
			} catch (MessagingException e) {
				e.printStackTrace();
			}
		}
	}

	@Async
	@Override
	public int sendWithTemplateWithUpdateHistory(Email email) {
		if(email != null && email.getRecipientList() != null && email.getRecipientList().length != 0) {
			JavaMailSenderImpl mailSender = customMailSender.builder();
			MimeMessage message = mailSender.createMimeMessage();

			try {
				MimeMessageHelper helper = new MimeMessageHelper(message,
						MimeMessageHelper.MULTIPART_MODE_NO,
						StandardCharsets.UTF_8.name());

				Context context = new Context();
				context.setVariables(email.getTemplateParams());

				String html = templateEngine.process(email.getTemplateName(), context);
				helper.setTo(email.getRecipientList());
				helper.setText(html, true);
				helper.setSubject(email.getSubject());
				helper.setFrom(email.getSenderEmail());

				mailSender.send(message);
				//log(email);
				return 1;
			} catch (MessagingException e) {
				e.printStackTrace();
				return 0;
			}
		}
		return 0;
	}

	@Override
	public boolean log(Email email) {
		if(email != null && email.getRecipientList() != null && email.getRecipientList().length != 0) {
			for(String recipient : email.getRecipientList()) {
				email.setRecipient(recipient);
				//mapper.insert(email);
			}
		}
		
		return false;
	}

	@Override
	public void sendWithTemplate(String recipient, String subject, String template, Map<String, Object> templateParams) {
		sendWithTemplate(new Email(recipient, subject, template, templateParams));
	}

	@Async
	@Override
	public void sendAdminTempPassword(String email, String tempPass) {
		Map<String, Object> templateParams = new HashMap<String, Object>();
		templateParams.put("tempPass", tempPass);
		templateParams.put("userType", "admin");

		sendWithTemplate(email, "임시 비밀번호 발급", "mail/temp-password", templateParams);
	}

	@Override
	public boolean send(MailHistory mailHistory) {
		if(StringUtils.isAllBlank(mailHistory.getSubject())
			|| StringUtils.isAllBlank(mailHistory.getContent())
			|| StringUtils.isAllBlank(mailHistory.getRecipientCc())) {
			return false;
		}
		
		JavaMailSenderImpl mailSender = customMailSender.builder();
		var mailMessage = new SimpleMailMessage();
		try {
			String[] recipientList = mailHistory.getRecipientCc().split(",");
			
			mailMessage.setSubject(mailHistory.getSubject());
			mailMessage.setFrom("cmstago@gmail.com");
			mailMessage.setText(mailHistory.getContent());
			mailMessage.setTo(recipientList);
           
			mailSender.send(mailMessage);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return false;
	}
}