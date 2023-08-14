package kr.co.tagoplus.common.helper;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.service.SecurityService;
import kr.co.tagoplus.jwt.model.JwtUserDetails;

public class UserDetailsHelper {

	@Resource(name = "securityService")
	private static SecurityService securityService;
		
	public static String findLoggedInUsername() {
		//return TextUtil.toString(securityService.findLoggedInUsername(), "");
		if (RequestContextHolder.getRequestAttributes() == null) {
			return null;
		}

		String username = "";
		try {
			User user = (User) RequestContextHolder.getRequestAttributes().getAttribute("loggedUser", RequestAttributes.SCOPE_SESSION);
			if(user != null) {
				username = user.getUsername();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return username;
	}
	
	public static String findLoggedInUsername(Authentication authentication) {
		String username = "";
		
		try {
			JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
			if(jwtUserDetails != null) {
				username = jwtUserDetails.getUsername();
			}
		} catch (Exception e) { 
			e.printStackTrace();
		}
		
		return username;
	}
	public static Long findLoggedInSeq(Authentication authentication) {
		Long seq = null;

		try {
			JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
			if(jwtUserDetails != null) {
				seq = jwtUserDetails.getSeq();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return seq;
	}
	public static String findLoggedInAuthorCd(Authentication authentication) {
		String authorCd = "";
		try {
			List<String> authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
			if(!authorities.isEmpty()) {
				authorCd = authorities.get(0);
			}				
		} catch (Exception e) { 
			e.printStackTrace();
		}
		return authorCd;
	}
	
	public static Boolean isAuthenticated() {
		if (RequestContextHolder.getRequestAttributes() == null) {
			return false;
		}

		return RequestContextHolder.getRequestAttributes().getAttribute("loggedUser", RequestAttributes.SCOPE_SESSION) != null ? true : false;
	}
	
	public static Boolean isAuthenticated(Authentication authentication) {
		if(authentication != null && authentication.getPrincipal() != null) {
			try {
				JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
				
				
				
				if(jwtUserDetails != null) {
					return true;
				}
			} catch (Exception e) { 
				e.printStackTrace();
			}
		}
		
		return false;
	}
	
	public static Object getLoggedInUser() {
		if (RequestContextHolder.getRequestAttributes() == null) {
			return null;
		}

		return RequestContextHolder.getRequestAttributes().getAttribute("loggedUser", RequestAttributes.SCOPE_SESSION);
	}
	
	public static Boolean isAdmin() {
		if (RequestContextHolder.getRequestAttributes() == null) {
			return false;
		}
		 User login = (User) RequestContextHolder.getRequestAttributes().getAttribute("loggedUser", RequestAttributes.SCOPE_SESSION);
		if(login != null) {
			
			return true;
		} 

		return false;
	}
}
