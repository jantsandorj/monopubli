package kr.co.tagoplus.common.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.ExceptionHelper;
import kr.co.tagoplus.common.util.DateUtil;

@RestControllerAdvice(basePackages = "kr.co.tagoplus")
public class CustomRestExceptionHandler extends ResponseEntityExceptionHandler {
	protected static Logger logger = LoggerFactory.getLogger(CustomRestExceptionHandler.class);
	
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotWritable(HttpMessageNotWritableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		
		ExceptionHelper error = new ExceptionHelper(DateUtil.getTimestampAsCompact(), "BAD_REQUEST", ex.getMessage(), "400");
        return new ResponseEntity<>(error, headers, HttpStatus.OK);
	}

	@Override
	protected ResponseEntity<Object> handleBindException(BindException ex, 
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		
		ExceptionHelper error = new ExceptionHelper(DateUtil.getTimestampAsCompact(), "BIND_EXCEPTION", ex.getAllErrors(), "400");
        return new ResponseEntity<>(error, headers, HttpStatus.OK);
	}
	
	@ExceptionHandler(value = CustomResponseException.class)
	protected ResponseEntity<Object> handleCustomRestException(CustomResponseException ex) {
		
		ExceptionHelper error = new ExceptionHelper(ex);
        return new ResponseEntity<>(error, new HttpHeaders(), HttpStatus.OK);
	}
}