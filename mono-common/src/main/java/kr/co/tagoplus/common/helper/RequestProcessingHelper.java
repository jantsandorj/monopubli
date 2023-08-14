package kr.co.tagoplus.common.helper;

import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import kr.co.tagoplus.common.util.TextUtil;

/**
 * @Description : This helper is used for request contextType checker
 * 
 */
public class RequestProcessingHelper {
	Logger logger = LoggerFactory.getLogger(RequestProcessingHelper.class);
	
	public static boolean isRestRequest(HttpServletRequest request) {
        String contentType = request.getHeader("Content-Type");
        String acceptType = request.getHeader("Accept");
		
		if(contentType != null && (contentType).contains("application/json")) {
			return true;
		}
		
		if(acceptType != null && (acceptType).contains("application/json")) {
			return true;
		}
		
		return false;
	}
	
	public static boolean hasDifferentReferer(HttpServletRequest request) {
		String refererUrl = request.getHeader("referer");
		String requestUrl = request.getRequestURI();
		
		if(refererUrl != null && requestUrl != null && !refererUrl.contains(requestUrl)) {
			return true;
		}
		
		return false;
	}

	public static String getClientIP(HttpServletRequest request) {
		String forwardedIP =  request.getHeader("X-Forwarded-For");

		if(StringUtils.isBlank(forwardedIP)) {
			forwardedIP = request.getRemoteAddr();
		}

		return forwardedIP;
	}
	
	public static String getScheme(HttpServletRequest request) {
		return TextUtil.toString(request.getScheme(), "http") + "://";
	}
}
