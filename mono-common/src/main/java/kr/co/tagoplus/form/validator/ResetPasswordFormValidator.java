package kr.co.tagoplus.form.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import kr.co.tagoplus.form.PasswordForm;
import kr.co.tagoplus.form.ResetPasswordForm;

@Component
public class ResetPasswordFormValidator implements Validator {
	protected static Logger logger = LoggerFactory.getLogger(ResetPasswordFormValidator.class);
	
	@Override
	public boolean supports(Class<?> clazz) {
		return PasswordForm.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		ResetPasswordForm form = (ResetPasswordForm) target;

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "newPassword", "invalid.required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "newPasswordConfirm", "invalid.required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "token", "invalid.required");

		
		try {
			if(!form.getNewPasswordConfirm().equals(form.getNewPassword())) {
				errors.rejectValue("newPasswordConfirm", "failed.password.confirm");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
