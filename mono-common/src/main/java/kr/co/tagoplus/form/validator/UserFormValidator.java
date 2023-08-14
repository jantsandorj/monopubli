package kr.co.tagoplus.form.validator;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import kr.co.tagoplus.common.util.TextUtil;
import kr.co.tagoplus.form.UserForm;

@Component
public class UserFormValidator implements Validator {
	protected static Logger logger = LoggerFactory.getLogger(UserFormValidator.class);
	
	@Override
	public boolean supports(Class<?> clazz) {
		return UserForm.class.equals(clazz);
	}
	
	@Autowired
	private MessageSource messageSource;

	@Override
	public void validate(Object target, Errors errors) {
		UserForm form = (UserForm) target;
		
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "fullname", "invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "mobile", "invalid.notempty");
		
		try {
			
			if(!TextUtil.isValidEmail(form.getEmail())) {
				errors.rejectValue("email", messageSource.getMessage("invalid.email", null, Locale.getDefault()));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
