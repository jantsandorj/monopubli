package kr.co.tagoplus.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class ApiCorsFilter extends OncePerRequestFilter {
    private final static Logger logger = LoggerFactory.getLogger(ApiCorsFilter.class);
    @Value("${cors.allowed}")
    private String CORS_ALLOWED;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String origin = "http://localhost:3000";
        String originServerName =  request.getHeader("origin");
        String[] cors = CORS_ALLOWED.split(",");
        
        if (originServerName == null || originServerName.equals("")) {
            origin = request.getServerName();
            
            if(request.getServerPort() != 80) {
                origin = origin + ":" + request.getServerPort(); 
            }
        } else {
            if (cors != null && cors.length > 0) {
                for (String domain : cors) {
                    if (domain.contains(originServerName)) {
                        origin = originServerName;
                    }
                }
            } else {
                logger.error("CORS DOMAINS NOT SET");
            }
        }
        
        response.setHeader("Access-Control-Allow-Origin", origin);
        response.setHeader("Vary", "Origin");
        response.setHeader("Access-Control-Allow-Methods", "HEAD, POST, GET, PUT, OPTIONS, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Authorization, Cache-Control, Content-Type, X-CSRF-TOKEN, X-API-TOKEN");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Max-Age", "4800");
        response.setHeader("Access-Control-Expose-Headers", "*");
        
        filterChain.doFilter(request, response);
    }
}