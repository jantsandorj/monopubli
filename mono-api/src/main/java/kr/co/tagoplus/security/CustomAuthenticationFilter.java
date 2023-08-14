package kr.co.tagoplus.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import kr.co.tagoplus.common.util.TextUtil;


public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {

		UsernamePasswordAuthenticationToken authRequest = getAuthRequest(request);
		setDetails(request, authRequest);
		return this.getAuthenticationManager().authenticate(authRequest);
	}
	
	private UsernamePasswordAuthenticationToken getAuthRequest(
      HttpServletRequest request) {
 
        String username = obtainUsername(request);
        username = (username != null) ? username : "";
        username = username.trim();
        
        String password = obtainPassword(request);
        password = (password != null) ? password : "";
        password = password.trim();
        
        String domain = obtainParameterOrAttribute(request, "domain");
        String type = obtainParameterOrAttribute(request, "type");

        String usernameDomainType = username.trim() + "," + domain + "," + type;
        return new UsernamePasswordAuthenticationToken(usernameDomainType, password);
    }	
	private String obtainParameterOrAttribute(HttpServletRequest request, String key) {
		String result = TextUtil.toString(request.getParameter(key), "");
		if("".equals(result)) {
			result = TextUtil.toString(request.getAttribute(key), "");
		}
		
		return result.trim();
	}
}
