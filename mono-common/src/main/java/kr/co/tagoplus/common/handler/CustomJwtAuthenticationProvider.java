package kr.co.tagoplus.common.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.oauth2.server.resource.BearerTokenAuthenticationToken;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.common.util.JwtHelper;
import kr.co.tagoplus.jwt.model.JwtUserDetails;

@Component
public class CustomJwtAuthenticationProvider implements AuthenticationManager {
	protected Logger logger = LoggerFactory.getLogger(CustomJwtAuthenticationProvider.class);
	
	private final JwtHelper jwtHelper;
	
	private HttpServletRequest request;
	
	@Resource(name = "adminDetailsServiceImpl")
	private UserDetailsService adminDetailsService;
	
	@Resource(name = "userDetailsServiceImpl")
	private UserDetailsService userDetailsService;
	
	public CustomJwtAuthenticationProvider(JwtHelper jwtHelper, UserDetailsService adminDetailsService, UserDetailsService userDetailsService, HttpServletRequest request) {
		this.jwtHelper = jwtHelper;
		this.adminDetailsService = adminDetailsService;
		this.userDetailsService = userDetailsService;
		this.request = request;
	}

	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		BearerTokenAuthenticationToken bearerTokenAuthenticationToken = (BearerTokenAuthenticationToken) authentication;
		String token = bearerTokenAuthenticationToken.getToken();
		
		String url = request.getRequestURI();
		
		if(jwtHelper.validateToken(token)) {
			String username = jwtHelper.getUserName(token);
			JwtUserDetails userDetails = null;
			
			if(url.contains("/api/")) {
				userDetails = (JwtUserDetails) adminDetailsService.loadUserByUsername(username);
			}
			else {
				userDetails = (JwtUserDetails) userDetailsService.loadUserByUsername(username);
			}
			
			if (userDetails == null) {
				throw new JwtException("JWT token is not valid");
		    }
			userDetails.setToken(token);
			UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
			
			usernamePasswordAuthenticationToken.setDetails(authentication.getDetails());
			return usernamePasswordAuthenticationToken;
		}
		return null;
	}
}
