package kr.co.tagoplus.common.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.common.component.RestResponse;

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    private static Logger logger = LoggerFactory.getLogger(CustomAccessDeniedHandler.class);

    @Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException e) throws IOException, ServletException {
		logger.error(e.getLocalizedMessage());
		
		String message = RestResponse.builder()
		        .status(HttpStatus.FORBIDDEN)
		        .message("Invalid Authorization token")
		        .path(request.getRequestURI())
		        .json();
		    response.setStatus(HttpStatus.FORBIDDEN.value());
		    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		    response.getWriter().write(message);
	}
}