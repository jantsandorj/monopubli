package kr.co.tagoplus.common.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminMapper;
import kr.co.tagoplus.jwt.model.JwtUserDetails;

@Service
public class AdminDetailsServiceImpl implements UserDetailsService {
	protected static Logger logger = LoggerFactory.getLogger(AdminDetailsServiceImpl.class);
	
	@Autowired
	private AdminMapper adminMapper;
	
	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin admin = adminMapper.authenticate(username);
		if(admin == null) {
			throw new UsernameNotFoundException(username);
		}
		
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();		
		if(admin.getAuthorCd() != null && !admin.getAuthorCd().equals("")) {
			grantedAuthorities.add(new SimpleGrantedAuthority(admin.getAuthorCd()));
		}
		
//		List<Role> roles = roleMapper.getRolesAndMenuTreeByUsername(username);
//		
//		if(!roles.isEmpty()) {
//			for(Role role : roles) {
//				grantedAuthorities.add(new SimpleGrantedAuthority(role.getRoleNm()));
//			}
//		}

		return JwtUserDetails.build(admin, grantedAuthorities);
	}
}