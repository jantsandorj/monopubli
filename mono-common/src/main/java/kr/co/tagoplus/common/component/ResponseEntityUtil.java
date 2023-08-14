package kr.co.tagoplus.common.component;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ResponseEntityUtil {
private static Logger logger = LoggerFactory.getLogger(ResponseEntityUtil.class);
	
	private static final int 	DEFAULT_SUCCESS_STATUS 	= 200;
	private static final String DEFAULT_SUCCESS_MESSAGE = "message.success";
	private static final int 	DEFAULT_ERROR_STATUS 	= 400;
	private static final String DEFAULT_ERROR 			= "error.failed";
	
	public static ResponseEntity<Object> build(Object content, String message, int status, Object errors) {
		ObjectMapper mapper = new ObjectMapper();
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("status", status);
		result.put("message", message);
		result.put("content", content);
		
		try {
			if(errors != null) {
				result.put("errors", errors);			
				logger.error(mapper.writeValueAsString(errors));
			}	
			
			logger.info(mapper.writeValueAsString(result));
		} catch (JsonProcessingException e) {
			logger.error("LoggingError: " + e.getMessage());
		}
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	public static ResponseEntity<Object> empty() {
		return build(null, "nodata", 404, null);
	}
	
	public static ResponseEntity<Object> list(Page<?> content) {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode result = mapper.convertValue(content, ObjectNode.class);
		result.put("status", DEFAULT_SUCCESS_STATUS);
		result.put("message", DEFAULT_SUCCESS_MESSAGE);
		
		return new ResponseEntity<Object>(result, HttpStatus.OK);
	}
	
	public static ResponseEntity<Object> success(Object content) {
		return build(content, DEFAULT_SUCCESS_MESSAGE, 200, null);
	}
	
	public static ResponseEntity<Object> success(Object content, String message) {
		return build(content, message, DEFAULT_SUCCESS_STATUS, null);
	}
	
	public static ResponseEntity<Object> error(Object content) {
		return build(content, DEFAULT_ERROR, DEFAULT_ERROR_STATUS, null);
	}
	
	public static ResponseEntity<Object> error(Object content, String message) {
		return build(content, message, DEFAULT_ERROR_STATUS, null);
	}
	
	public static ResponseEntity<Object> error(Object content, String message, Object errors) {
		return build(content, message, DEFAULT_ERROR_STATUS, errors);
	}
}