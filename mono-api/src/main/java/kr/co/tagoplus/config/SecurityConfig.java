package kr.co.tagoplus.config;

import java.security.interfaces.RSAPublicKey;
import java.util.Arrays;
import java.util.Collections;

import javax.servlet.http.HttpServletRequest;

import kr.co.tagoplus.filter.ApiCorsFilter;
import kr.co.tagoplus.filter.JwtFilter;
import kr.co.tagoplus.security.CustomAuthenticationEntryPoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationFilter;

import kr.co.tagoplus.common.component.CustomBcryptPasswordEncoder;
import kr.co.tagoplus.common.handler.CustomAccessDeniedHandler;
import kr.co.tagoplus.common.handler.CustomJwtAuthenticationProvider;
import kr.co.tagoplus.common.util.JwtHelper;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.session.SessionManagementFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfig{

	@Qualifier("adminDetailsServiceImpl")
	@Autowired
	private UserDetailsService adminDetailsService;
	
	@Qualifier("userDetailsServiceImpl")
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private ApiCorsFilter corsFilter;
	
    @Autowired
    private JwtFilter jwtFilter;
    
    @Autowired
    private JwtHelper jwtHelper;
    
    @Autowired
    private CustomAuthenticationEntryPoint customAuthenticationEntryPoint;
    
    @Autowired
	private CustomAccessDeniedHandler customAccessDeniedHandler;
    
    @Autowired
	private CustomJwtAuthenticationProvider customJwtAuthenticationProvider;

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new CustomBcryptPasswordEncoder();
	}
	
	@Bean
    public CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        //configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("HEAD",
                "GET", "POST", "PUT", "DELETE", "PATCH"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Collections.singletonList("*"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http, HttpServletRequest request) throws Exception {        
		
		http.addFilterBefore(corsFilter, SessionManagementFilter.class);
		http
			.csrf().disable()
			.cors().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
			.authorizeRequests(configurer -> configurer
					.antMatchers(HttpMethod.OPTIONS).permitAll()
					.antMatchers(
		                "/api/login",
		                "/api/customer/register",
		                "/api/anonym/**",
		                //"/api/**",
		                "/web/**",
		                "/files/download/**",
		                "/favicon.ico")
		            .permitAll()
		            .antMatchers( "/api/me").hasAuthority("NORMAL")
				.anyRequest()
				.authenticated()
			).addFilterBefore(jwtFilter, BearerTokenAuthenticationFilter.class)
			.oauth2ResourceServer().jwt(jwt -> jwt.authenticationManager(new CustomJwtAuthenticationProvider(jwtHelper, adminDetailsService, userDetailsService, request)))
				.authenticationEntryPoint(customAuthenticationEntryPoint)
				.accessDeniedHandler(customAccessDeniedHandler);
			
		return http.build();
	}
	
	@Bean
    public AuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(adminDetailsService);
        daoAuthenticationProvider.setHideUserNotFoundExceptions(false);
        daoAuthenticationProvider.setPasswordEncoder(bCryptPasswordEncoder());
        return daoAuthenticationProvider;
    }
	
	@Bean
	public JwtDecoder jwtDecoder(RSAPublicKey rsaPublicKey) {
		return NimbusJwtDecoder.withPublicKey(rsaPublicKey).build();
	}

}
