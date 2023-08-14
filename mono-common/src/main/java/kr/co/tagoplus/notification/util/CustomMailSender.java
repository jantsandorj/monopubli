package kr.co.tagoplus.notification.util;

import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.common.util.Encryptor;

@Component
public class CustomMailSender {
	protected static Logger logger = LoggerFactory.getLogger(CustomMailSender.class);
	
	@Value("${tagocms.mail.smtp.host}")
	private String host;
	
	@Value("${tagocms.mail.smtp.port}")
	private int port;
	
	@Value("${tagocms.mail.smtp.user}")
	private String username;
	
	@Value("${tagocms.mail.smtp.pass}")
	private String password;
	
	@Value("${tagocms.mail.smtp.transport}")
	private String transport;
	
	@Value("${tagocms.mail.smtp.starttls}")
	private boolean starttls;
	
	@Value("${tagocms.mail.smtp.auth}")
	private boolean auth;
	
	public JavaMailSenderImpl builder() {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	    mailSender.setHost(this.host);
	    mailSender.setPort(this.port);
	    
	    mailSender.setUsername(this.username);
	    String password = this.password;
	    
	    try {
			password = Encryptor.decrypt(this.password);
		} catch (Exception e) {
			password = this.password;
		}
	    
	    mailSender.setPassword(password);
	    
	    Properties props = mailSender.getJavaMailProperties();
	    props.put("mail.transport.protocol", this.transport);
	    props.put("mail.smtp.auth", this.auth);
	    props.put("mail.smtp.starttls.enable", this.starttls);
	    props.put("mail.smtp.ssl.trust", this.host);
	    props.put("mail.debug", "true");
	    
	    logger.info("================= gmail: " + password);
	    
	    return mailSender;
	}
}
