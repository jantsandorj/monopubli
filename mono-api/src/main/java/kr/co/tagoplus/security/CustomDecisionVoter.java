package kr.co.tagoplus.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.access.AccessDecisionVoter;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.FilterInvocation;

import kr.co.tagoplus.common.helper.RequestProcessingHelper;

public class CustomDecisionVoter implements AccessDecisionVoter<FilterInvocation>  {
	
	@Override
	public boolean supports(ConfigAttribute attribute) {
		return true;
	}

	@Override
	public boolean supports(Class<?> clazz) {
		return true;
	}

	@Override
	public int vote(Authentication authentication, FilterInvocation invocation, Collection attributes) {
		int vote = ACCESS_DENIED;
		if(!authentication.isAuthenticated()) {
			return vote;
		}
		
		List<String> urlExceptions = Arrays.asList(new String[] {"/api", "/login", "/logout", "/error", "/noemail", "/files/download/"});
		if(RequestProcessingHelper.isRestRequest(invocation.getHttpRequest())) {
			return ACCESS_GRANTED;
		}
		
		for(String urlException : urlExceptions) {
			if(invocation.getRequestUrl().startsWith(urlException)) {
				return ACCESS_GRANTED;
			}
		} 
		
		boolean hasAccess = true; 
  		List<String> accessRules = Arrays.asList(new String[] {"/"});
  		for(String rule : accessRules) {
  			if(invocation.getRequestUrl().startsWith(rule)) {
  				hasAccess = false;
  				break;
  			}
  		}
  		
  		if(hasAccess) {
  			return ACCESS_GRANTED;
  		}
  		
		return ACCESS_DENIED;
	}
	
}
