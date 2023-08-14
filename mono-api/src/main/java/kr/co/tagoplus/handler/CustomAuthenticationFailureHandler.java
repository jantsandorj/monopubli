package kr.co.tagoplus.handler;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.common.util.TextUtil;

@Component
public class CustomAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {
	protected static Logger logger = LoggerFactory.getLogger(CustomAuthenticationFailureHandler.class);
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		
		logger.info("========================= LOGIN FAILURE");
		
		String username =  request.getParameter("username");
		String result = "log.login.failed";

		String[] usernameAndDomainAndType = StringUtils.split(username, String.valueOf(","));
		String domain = "";
		if(usernameAndDomainAndType.length > 2) {
			domain = usernameAndDomainAndType[2];
		}
		
		String type = TextUtil.toString(request.getParameter("type"), "ST");
		response.sendRedirect("/login?error=error.auth&type=" + type);
	}
}
