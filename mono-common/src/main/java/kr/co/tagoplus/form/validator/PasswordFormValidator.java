package kr.co.tagoplus.form.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import kr.co.tagoplus.form.PasswordForm;

@Component
public class PasswordFormValidator implements Validator {
	protected static Logger logger = LoggerFactory.getLogger(UserFormValidator.class);
	
	@Override
	public boolean supports(Class<?> clazz) {
		return PasswordForm.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		PasswordForm form = (PasswordForm) target;
		
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "oldPassword", "invalid.required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "oldPasswordConfirm", "invalid.required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "newPassword", "invalid.required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "newPasswordConfirm", "invalid.required");

		
		try {
			if(form.getOldPasswordConfirm().equals(form.getOldPassword())) {
				errors.rejectValue("passwordConfirm", "failed.old.password.confirm");
			}
			if(form.getNewPasswordConfirm().equals(form.getNewPassword())) {
				errors.rejectValue("passwordConfirm", "failed.new.password.confirm");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
