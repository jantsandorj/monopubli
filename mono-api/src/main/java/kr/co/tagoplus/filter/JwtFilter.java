package kr.co.tagoplus.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import kr.co.tagoplus.common.util.JwtHelper;
import kr.co.tagoplus.jwt.model.JwtUser;
import kr.co.tagoplus.jwt.model.JwtUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {
    protected static Logger logger = LoggerFactory.getLogger(JwtFilter.class);
	private static final String BEARER_WORD = "Bearer ";

    @Autowired
    private JwtHelper jwtHelper;
    

	@Qualifier("adminDetailsServiceImpl")
	@Autowired
	private UserDetailsService adminDetailsService;
	
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        boolean doFilter = true;
        List<String> urlExceptions = Arrays.asList(new String[] {"/api/", "/web/", "/files/download/"});
        for(String urlException : urlExceptions) {
            if(request.getRequestURI().startsWith(urlException)) {
                doFilter = false;
            }
        }  

        if(doFilter) {
            final String requestTokenHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
            String username = null;
            String jwtToken = null;
            
            String token = jwtHelper.resolveToken(request);
            
            if(!jwtHelper.validateToken(token)) {
            	chain.doFilter(request, response);
                return;
            }

            if (requestTokenHeader != null && requestTokenHeader.startsWith(BEARER_WORD)) {
                jwtToken = requestTokenHeader.substring(7);

                try {
                    username = jwtHelper.getUserName(token);
                } catch (IllegalArgumentException e) {
                    System.out.println("Unable to get JWT Token");
                } catch (ExpiredJwtException e) {
                    System.out.println("JWT Token has expired");
                } catch (SignatureException e) {
                    System.out.println("Invalid JWT Token");
                }
            } else {
            	logger.info("JWT Token does not begin with Bearer String or empty");
                chain.doFilter(request, response);
                return;
            }


            if (username != null) {
                JwtUser jwtUser = jwtHelper.validate(jwtToken);
                if (jwtUser == null) {
                    throw new RuntimeException("JWT Token is incorrect");
                }

                List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList(jwtUser.getRole());

                UserDetails jwtUserDetails = new JwtUserDetails(jwtUser, jwtToken, grantedAuthorities);

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(jwtUserDetails, null, jwtUserDetails.getAuthorities());

                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

            }
        }

        chain.doFilter(request, response);
    }
}
