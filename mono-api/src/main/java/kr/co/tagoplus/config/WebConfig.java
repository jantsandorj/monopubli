package kr.co.tagoplus.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.annotation.Order;
import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.servlet.config.annotation.*;
import kr.co.tagoplus.intercepter.CustomIntercepter;

@Configuration
@EnableWebMvc
@Order(1)
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(customIntercepter())
			.addPathPatterns("/*","/*/*", "/*/*/*")
			.excludePathPatterns("/static/**", "/login.*", "/anonym/*",  "/files/**", "/underconstruction", "/notfound");
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
	}

	
	@Bean
	public CustomIntercepter customIntercepter() {
		return new CustomIntercepter();
	}
	
	@Bean
	public MessageSource messageSource() {
		ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
		messageSource.setBasename("classpath:config/messages");
		messageSource.setDefaultEncoding("UTF-8");
		
		return messageSource;
	}
	
	@Bean
	public RequestContextListener requestContextListener() {
		return new RequestContextListener();
	}
	
	@Bean
	public OpenEntityManagerInViewFilter springOpenEntityManagerInViewFilter() {
		OpenEntityManagerInViewFilter osivFilter = new OpenEntityManagerInViewFilter();
    	osivFilter.setEntityManagerFactoryBeanName("entityManager");
    	
    	return osivFilter;
	}
	
	@Bean
	public OpenEntityManagerInViewFilter memoryH2OpenEntityManagerInViewFilter() {
		OpenEntityManagerInViewFilter osivFilter = new OpenEntityManagerInViewFilter();
    	osivFilter.setEntityManagerFactoryBeanName("memoryH2EntityManager");
    	
    	return osivFilter;
	}
}