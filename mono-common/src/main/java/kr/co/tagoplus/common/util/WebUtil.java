package kr.co.tagoplus.common.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.fasterxml.jackson.databind.ObjectMapper;

public class WebUtil {

	public static String filePathBlackList(String value) {
		String returnValue = value;
		if (returnValue == null || returnValue.trim().equals("")) {
			return "";
		}

		returnValue = returnValue.replaceAll("\\.\\./", ""); // ../
		returnValue = returnValue.replaceAll("\\.\\.\\\\", ""); // ..\

		return returnValue;
	}

	/**
	 * 행안부 보안취약점 점검 조치 방안.
	 *
	 * @param value
	 * @return
	 */
	public static String filePathReplaceAll(String value) {
		String returnValue = value;
		if (returnValue == null || returnValue.trim().equals("")) {
			return "";
		}

		returnValue = returnValue.replaceAll("/", "");
		returnValue = returnValue.replaceAll("\\", "");
		returnValue = returnValue.replaceAll("\\.\\.", ""); // ..
		returnValue = returnValue.replaceAll("&", "");

		return returnValue;
	}

	public static String filePathWhiteList(String value) {
		return value;
	}
	
	public static String getClientIP(HttpServletRequest request) {
		String ipAddress=null;
		String gateway = request.getHeader("VIA");   		// Gateway
		ipAddress = request.getHeader("X-FORWARDED-FOR");   // proxy
		
		if(ipAddress==null) {
		    ipAddress = request.getRemoteAddr();
		}
		
		return TextUtil.toString(ipAddress, "");
	}
	
	public static String getRequestBody(HttpServletRequest request) {
		String body = "";
	    StringBuilder stringBuilder = new StringBuilder();
	    BufferedReader bufferedReader = null;

	    try {
	        InputStream inputStream = request.getInputStream();
	        if (inputStream != null) {
	            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
	            char[] charBuffer = new char[128];
	            int bytesRead = -1;
	            while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
	                stringBuilder.append(charBuffer, 0, bytesRead);
	            }
	        } else {
	            stringBuilder.append("");
	        }
	    } catch (IOException ex) {
	        ex.printStackTrace();
	    } finally {
	        if (bufferedReader != null) {
	            try {
	                bufferedReader.close();
	            } catch (IOException ex) {
	            	ex.printStackTrace();
	            }
	        }
	    }

	    body = stringBuilder.toString();
	    return body;
	}
	
	public static String getRequestFormData(HttpServletRequest request) {
		String result = "";
		
		try {
			Map<String, String[]> params = request.getParameterMap();
			ObjectMapper mapper = new ObjectMapper();
			result = mapper.writerWithDefaultPrettyPrinter()
					  .writeValueAsString(params);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
}
