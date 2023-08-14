package kr.co.tagoplus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import kr.co.tagoplus.file.entity.FileProperty;

@SpringBootApplication
@EnableScheduling
@EnableTransactionManagement
@EnableConfigurationProperties({
    FileProperty.class
})
public class MonoApi extends SpringBootServletInitializer {
	
	public static void main(String[] args) {
		SpringApplication.run(MonoApi.class, args);
	}
}