package kr.co.tagoplus.common.util;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import kr.co.tagoplus.jwt.model.JwtUser;
import kr.co.tagoplus.jwt.model.JwtUserDetails;

@Component
public class JwtHelper {

	@Qualifier("adminDetailsServiceImpl")
	@Autowired
	private UserDetailsService adminDetailsService;
	
	@Qualifier("userDetailsServiceImpl")
	@Autowired
	private UserDetailsService userDetailsService;
	
	private final RSAPrivateKey privateKey;
	private final RSAPublicKey publicKey;
	
	public JwtHelper(RSAPrivateKey privateKey, RSAPublicKey publicKey) {
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}
	
	public String createJwtForClaims(String subject, Map<String, String> claims) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(Instant.now().toEpochMilli());
		calendar.add(Calendar.MINUTE, 360);
		
		JWTCreator.Builder jwtBuilder = JWT.create().withSubject(subject);
		
		claims.forEach(jwtBuilder::withClaim);
		
		return jwtBuilder
						.withNotBefore(new Date())
						.withExpiresAt(calendar.getTime())
						.sign(Algorithm.RSA256(publicKey, privateKey));
	}
	
	public Authentication getAuthentication(String token) {
		JwtUserDetails user = (JwtUserDetails) adminDetailsService.loadUserByUsername(getUserName(token));
		return new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword(), user.getAuthorities());
	}
	
	public Authentication getUserAuthentication(String token) {
		JwtUserDetails user = (JwtUserDetails) userDetailsService.loadUserByUsername(getUserName(token));
		
		return new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword(), user.getAuthorities());
	}
	
	@SuppressWarnings("unused")
	public Optional<Authentication> authenticate(String username, String token) throws NotFoundException {
		JwtUserDetails user = (JwtUserDetails) adminDetailsService.loadUserByUsername(username);
		user.setToken(token);
		try {
			if(user != null) {
				return Optional.of(new UsernamePasswordAuthenticationToken(user, user.getPassword(), user.getAuthorities()));
			}
		} catch (JwtException | IllegalArgumentException e) {
			throw new NotFoundException("Unauthorized user");
		}
		
		return Optional.empty();
	}
	
	public String getUserName(String token) {
		return parseToken(token);
	}
	
	public String resolveToken(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		
		if(token == null) return null;
		
		return getOnlyToken(token);
	}
	
	public String resolveToken(ServerHttpRequest request) {
		String token = request.getHeaders().getOrEmpty("Authorization").get(0);
		
		if(token == null) return null;
		
		return getOnlyToken(token);
	}
	
	public String parseToken(String token) {
		JWTVerifier verifier = JWT.require(Algorithm.RSA256(publicKey, privateKey)).build();
		DecodedJWT jwt = verifier.verify(token);
		return jwt.getSubject();
	}
	
	public boolean validateToken(String token) {
		try {

			JWTVerifier verifier = JWT.require(Algorithm.RSA256(publicKey, privateKey)).build();
			DecodedJWT jwt = verifier.verify(token);
			return !jwt.getExpiresAt().before(new Date());
		} catch (JWTVerificationException e) {
			if(e instanceof TokenExpiredException) {
				return false;
			}
			return false;
		}
	}
	
	public String getOnlyToken(String token) {
		return token.substring("Bearer ".length());
	}
	
	public JwtUserDetails createUserDetails(String token) {
		JWTVerifier verifier = JWT.require(Algorithm.RSA256(publicKey, privateKey)).build();
		DecodedJWT jwt = verifier.verify(token);
		JwtUserDetails userDetails = (JwtUserDetails) adminDetailsService.loadUserByUsername(jwt.getSubject());
		
		return userDetails;
	}
	
	public JwtUser validate(String token) {
        JwtUser jwtUser = null;
        if(!validateToken(token)){
        	return jwtUser;
        }
        try {           
            JWTVerifier verifier = JWT.require(Algorithm.RSA256(publicKey, privateKey)).build();
    		DecodedJWT jwt = verifier.verify(token);
    		Map<String, Claim> body = jwt.getClaims();

            jwtUser = new JwtUser();
            Claim username =  body.get("username");
            jwtUser.setUsername(username.asString());
            jwtUser.setFullname(body.get("fullname").asString());
            jwtUser.setEmail(body.get("email").asString());
            jwtUser.setAuth(body.get("auth").asString());
            jwtUser.setRole(body.get("role").asString());
			//jwtUser.setImageFile((String) body.get("imageFile"));
			//jwtUser.setUuid((String) body.get("uuid"));
        } catch (Exception e) {
            System.out.println(e);
        }
        return jwtUser;
    }
}
