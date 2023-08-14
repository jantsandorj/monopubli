package kr.co.tagoplus.common.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.service.UserMapper;
import kr.co.tagoplus.jwt.model.JwtUserDetails;

@Primary
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	protected static Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);
	
	@Autowired
	private UserMapper userMapper;
	
	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userMapper.authenticate(username);
		if(user == null) {
			throw new UsernameNotFoundException(username);
		}
		
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
//		List<Role> roles = roleMapper.getRolesAndMenuTreeByUsername(username);
//		
//		if(!roles.isEmpty()) {
//			for(Role role : roles) {
//				grantedAuthorities.add(new SimpleGrantedAuthority(role.getRoleNm()));
//			}
//		}
		
		//return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorities);
		return new JwtUserDetails(user.getFullname(), user.getUsername(), user.getEmail(), grantedAuthorities, user.getSeq());
	}
}