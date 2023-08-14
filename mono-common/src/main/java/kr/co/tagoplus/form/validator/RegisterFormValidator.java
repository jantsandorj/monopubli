package kr.co.tagoplus.form.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import kr.co.tagoplus.common.util.TextUtil;
import kr.co.tagoplus.form.RegisterForm;

@Component
public class RegisterFormValidator implements Validator {
	protected static Logger logger = LoggerFactory.getLogger(RegisterFormValidator.class);
	
	@Override
	public boolean supports(Class<?> clazz) {
		return RegisterForm.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		RegisterForm form = (RegisterForm) target;
		
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", 		"invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "fullname",		"invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastname",		"invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "registrationNo", "invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", 		"invalid.notempty");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "passwordConfirm", "invalid.notempty");
		
		try {
			//check valid phone or email
			if (!TextUtil.isValidEmailOrPhone(form.getUsername())) {
				errors.rejectValue("passwordConfirm", "invalid.username");
			}
			if (!form.getPasswordConfirm().equals(form.getPassword())) {
				errors.rejectValue("username", "failed.password.confirm");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
