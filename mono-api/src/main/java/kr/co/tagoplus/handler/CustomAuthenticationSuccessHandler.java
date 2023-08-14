package kr.co.tagoplus.handler;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.service.UserService;
import kr.co.tagoplus.common.util.DateUtil;

@Component
public class CustomAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
	protected static Logger logger = LoggerFactory.getLogger(CustomAuthenticationSuccessHandler.class);
	
	private RequestCache requestCache = new HttpSessionRequestCache();
	
	@Autowired
	private UserService userService;
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		logger.info("========================= LOGIN SUCCESS");
		
		String domain = request.getParameter("domain");
		String type = request.getParameter("type");
		String username = authentication.getName();
		
		User user = null;		
		User userDetail = userService.getByUsername(username);
		if(userDetail != null) {
			user = authenticate(userDetail);
		}	
		
		HttpSession session = request.getSession(true);
        if (session != null) {	                        
            User loggedUser = user;
            session.setAttribute("loggedUser", loggedUser);
			session.setMaxInactiveInterval(1800); //30 min
        }
        
        SavedRequest savedRequest = this.requestCache.getRequest(request, response);
		if (savedRequest != null) {
			super.onAuthenticationSuccess(request, response, authentication);
			return;
		}
		clearAuthenticationAttributes(request);
		
		String returnUrl = "/";
		if("UV".equals(type)) {
			returnUrl = returnUrl + "partner/buyership";
		}
		
		getRedirectStrategy().sendRedirect(request, response, returnUrl);
		super.onAuthenticationSuccess(request, response, authentication);
	}

	public void setRequestCache(RequestCache requestCache) {
		this.requestCache = requestCache;
	}
	
	public User authenticate(User user) {
		User loginVO = user;
		user.setLastLoginDate(DateUtil.getTimestampAsCompact());
		userService.update(user);
		return loginVO;
	}
}
