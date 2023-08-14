package kr.co.tagoplus.jwt.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import kr.co.tagoplus.auth.entity.Admin;

import java.util.Collection;
import java.util.List;
import java.util.Set;

public class JwtUserDetails implements UserDetails {
	private static final long serialVersionUID = -2088005458978390836L;
	
	private String fullname;
    private String token;
    private String email;
    private String username;
    private String uuid;
    private Long seq;

    private Collection<? extends GrantedAuthority> authorities;


    public JwtUserDetails(String fullname, String id, String token, List<GrantedAuthority> grantedAuthorities,
            String uuid, Long seq) {

        this.fullname = fullname;
        this.username = id;
        this.token= token;
        this.authorities = grantedAuthorities;
        this.uuid = uuid;
        this.seq = seq;
    }
    
    public JwtUserDetails(JwtUser jwtUser, String token, List<GrantedAuthority> grantedAuthorities) {

        this.fullname = jwtUser.getFullname();
        this.username = jwtUser.getUsername();
        this.token= token;
        this.email= jwtUser.getEmail();
        this.authorities = grantedAuthorities;
        this.uuid = jwtUser.getUuid();
        this.seq = jwtUser.getSeq();
    }
    
    public JwtUserDetails(String fullname, String username, String email, Set<GrantedAuthority> grantedAuthorities,
            String uuid, Long seq) {

        this.fullname = fullname;
        this.username = username;
        this.email= email;
        this.authorities = grantedAuthorities;
        this.uuid = uuid;
        this.seq = seq;
    }
    
    public JwtUserDetails(String fullname, String username, String email, Set<GrantedAuthority> grantedAuthorities, Long seq) {

        this.fullname = fullname;
        this.username = username;
        this.email= email;
        this.authorities = grantedAuthorities;
        this.seq = seq;
    }
    
    public static JwtUserDetails build(Admin admin, Set<GrantedAuthority> grantedAuthorities) {
    	
	    return new JwtUserDetails(
	    	admin.getFullname(),
	    	admin.getUsername(),
	    	admin.getEmail(),
	        grantedAuthorities,
            admin.getSeq()
	    );
	}

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    public String getFullname() {
        return fullname;
    }

    public String getToken() {
        return token;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUuid() {
        return this.uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

	public void setToken(String token) {
		this.token = token;
	}

    public Long getSeq() {
        return seq;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }
}
