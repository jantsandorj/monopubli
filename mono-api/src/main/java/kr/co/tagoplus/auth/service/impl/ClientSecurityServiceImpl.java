package kr.co.tagoplus.auth.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.auth.service.SecurityService;

@Service("securityService")
public class ClientSecurityServiceImpl implements SecurityService {
	protected static Logger logger = LoggerFactory.getLogger(ClientSecurityServiceImpl.class);
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Qualifier("adminDetailsServiceImpl")
	@Autowired
	private UserDetailsService adminDetailsService;
	
	@Autowired
	private AdminService adminService;
	
	@Override
	public void autoLogin(String username, String password) {
		UserDetails userDetails = adminDetailsService.loadUserByUsername(username);
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
	
		authenticationManager.authenticate(authToken);
		
		if(authToken.isAuthenticated()) {
			SecurityContextHolder.getContext().setAuthentication(authToken);
			
			logger.debug("Auto login: ", username);
		}
	}

	@Override
	public String findLoggedInUsername() {
		String username = findLoggedInUsername();
		Admin admin = adminService.getByUsername(username);
		
		if(admin != null) {
			return admin.getUsername();
		}
		
		return null;
	}

	@Override
	public Boolean isAuthenticated() {
		Object userDetails = SecurityContextHolder.getContext().getAuthentication();
		
		if(userDetails != null) {
			return true;
		}
		
		return false;
	}

	@Override
	public Object getLoggedInUser() {
		if (RequestContextHolder.getRequestAttributes() == null) {
			return null;
		}

		return RequestContextHolder.getRequestAttributes().getAttribute("loggedUser", RequestAttributes.SCOPE_SESSION);
	}
}
