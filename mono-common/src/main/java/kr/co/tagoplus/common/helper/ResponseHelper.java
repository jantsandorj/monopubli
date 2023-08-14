package kr.co.tagoplus.common.helper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;

public class ResponseHelper {
	private String status;
	private String message;
	
	public ResponseHelper(String message) {
		this.status = "success";
		this.message = message;
	}
	
	public ResponseHelper(HttpStatus status, String message) {
		this.status = status.toString();
		this.message = message;
	}

	public static Map<String, Object> responseJQGrid(List<?> itemList, int page, int totalItems, int totalPages) {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("page", page);
		result.put("total", totalPages);
		result.put("id", "id");
		result.put("records", totalItems);
		result.put("rows", itemList);
		
		return result;
	}

	public static Map<String, Object> responseJwt(UserDetails user, String token) {
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("username", user.getUsername());
		result.put("token", token);
		
		return result;
	}
	
	public static Map<String, Object> response(Page<?> itemList) {
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("total", itemList.getSize());
		result.put("itemList", itemList);
		
		return result;
	}
	
	public static Map<String, Object> response(List<?> itemList) {
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("total", itemList.size());
		result.put("itemList", itemList);
		
		return result;
	}
	
	public static Map<String, Object> response(List<?> itemList, String itemKey) {
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("total", itemList.size());
		result.put(itemKey, itemList);
		
		return result;
	}
	
	public static Map<String, Object> response(int total, List<?> itemList, String itemKey) {
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("total", total);
		result.put(itemKey, itemList);
		
		return result;
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
}
