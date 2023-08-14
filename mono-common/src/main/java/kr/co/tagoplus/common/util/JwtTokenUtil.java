package kr.co.tagoplus.common.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import kr.co.tagoplus.jwt.model.JwtUser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenUtil implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5808571544082828165L;
	public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
	public static final long JWT_AUTH_TOKEN_VALIDITY = 24 * 60 * 60;

	@Value("${jwt.secret}")
	private String secret;

	public enum TYPE {
		NORMAL, ADMIN
	};

	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}
	
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}

	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}
	
	public Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}
	
	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}
	
	public String generateToken(String username) {
		Map<String, Object> claims = new HashMap<String, Object>();
		return doGenerateToken(claims, username);
	}
	
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<String, Object>();	
		return doGenerateToken(claims, userDetails.getUsername());
	}
	
	private String doGenerateToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS512, secret).compact();
			
	}
	
	public Boolean validateToken(String token, UserDetails userDetails) {
		final String username = getUsernameFromToken(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
	
	
    public String generate(JwtUser jwtUser) {

        Claims claims = Jwts.claims().setSubject(jwtUser.getUsername());
        claims.put("username", jwtUser.getUsername());
        claims.put("fullname", jwtUser.getFullname());
        claims.put("email", jwtUser.getEmail());
		claims.put("role", TYPE.NORMAL);
        claims.put("imageFile", null /*jwtUser.getImageFile()*/);
		claims.put("uuid", jwtUser.getUuid());

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

	public String generateAuthToken(JwtUser jwtUser) {

		Claims claims = Jwts.claims().setSubject(jwtUser.getEmail());
		claims.put("username", jwtUser.getUsername());
		claims.put("fullname", jwtUser.getFullname());
		claims.put("id", jwtUser.getUsername());
		claims.put("email", jwtUser.getEmail());
		claims.put("auth", jwtUser.getAuth());
		claims.put("role", TYPE.NORMAL);
		claims.put("imageFile", null /*jwtUser.getImageFile()*/);
		claims.put("uuid", jwtUser.getUuid());

		return Jwts.builder()
				.setClaims(claims)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_AUTH_TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}
	
    public JwtUser validate(String token) {
        JwtUser jwtUser = null;
        if(isTokenExpired(token)){
        	return jwtUser;
        }
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();

            jwtUser = new JwtUser();
            String username =   (String) body.get("username");
            jwtUser.setUsername(username);
            jwtUser.setFullname((String) body.get("fullname"));
            jwtUser.setEmail((String) body.get("email"));
            jwtUser.setAuth((String) body.get("auth"));
            jwtUser.setRole((String) body.get("role"));
			//jwtUser.setImageFile((String) body.get("imageFile"));
			//jwtUser.setUuid((String) body.get("uuid"));
        } catch (Exception e) {
            System.out.println(e);
        }
        return jwtUser;
    }
	
}
