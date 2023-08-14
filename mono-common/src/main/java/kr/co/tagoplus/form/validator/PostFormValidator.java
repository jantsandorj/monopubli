package kr.co.tagoplus.form.validator;

import kr.co.tagoplus.community.entity.Board;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component
public class PostFormValidator implements Validator {
	protected static Logger logger = LoggerFactory.getLogger(PostFormValidator.class);
	
	@Override
	public boolean supports(Class<?> clazz) {
		return Board.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		Board form = (Board) target;
		
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "title", 			"invalid.notempty");

	}
}
