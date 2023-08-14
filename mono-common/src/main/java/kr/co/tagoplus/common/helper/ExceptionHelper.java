package kr.co.tagoplus.common.helper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.util.DateUtil;

public class ExceptionHelper {
	
	private String issuedTime;
	private String status;
	private String message;
	private String code;
	private Map<String, String> errors;
	
	public ExceptionHelper() {
	}

	public ExceptionHelper(String issuedTime, String status, String message, String code) {
		this.issuedTime = issuedTime;
		this.status = status;
		this.message = message;
		this.code = code;
	}
	
	public ExceptionHelper(String issuedTime, String status, Map<String, String> errors, String code) {
		this.issuedTime = issuedTime;
		this.status = status;
		this.message = code;
		this.code = code;
		this.errors = errors;
	}
	
	public ExceptionHelper(String issuedTime, String status, List<ObjectError> errors, String code) {
		this.issuedTime = issuedTime;
		this.status = status;
		this.message = code;
		this.code = code;
		this.errors = new HashMap<String, String>();
		
		if(errors != null && !errors.isEmpty()) {
			for(ObjectError error : errors) {
				FieldError fieldError = (FieldError) error;
				this.errors.put(fieldError.getField(), fieldError.getCode());
			}
		}
	}
	
	public ExceptionHelper(CustomResponseException ex) {
		this(DateUtil.getTimestampAsCompact(), ex);
	}
	
	public ExceptionHelper(String issuedTime, CustomResponseException ex) {
		this.issuedTime = issuedTime;
		this.status = "NoHandler Exception";
		this.code = "400";
				
		if(ex != null) {
			this.message = ex.getMessage();
			
			if(ex.getStatus() != null) {
				this.status = ex.getStatus().getReasonPhrase();
				this.code = String.valueOf(ex.getStatus().value());
			}
		}
	}

	public String getIssuedTime() {
		return issuedTime;
	}
	public void setIssuedTime(String issuedTime) {
		this.issuedTime = issuedTime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}

	public Map<String, String> getErrors() {
		return errors;
	}

	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}
}
