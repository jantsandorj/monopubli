package kr.co.tagoplus.common.component;

import java.util.StringJoiner;

import kr.co.tagoplus.common.util.DateUtil;

public class RestResponse {

	private final String timestamp = DateUtil.getCurrentTimestamp();
	private int status ;
	private String error;
	private String message;
	private String path;
	
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getTimestamp() {
		return timestamp;
	}
	
	public static RestResponseBuilder builder() {
		return  new RestResponseBuilder();
	}

	public String toJson() {
	    return new StringJoiner(", ", "{", "}")
	        .add("\"timestamp\": \"" + timestamp + "\"")
	        .add("\"status\": " + status)
	        .add("\"error\": \"" + error + "\"")
	        .add("\"message\": \"" + message + "\"")
	        .add("\"path\": \"" + path + "\"")
	        .toString();
	  }
}
