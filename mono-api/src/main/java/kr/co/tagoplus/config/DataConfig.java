package kr.co.tagoplus.config;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@PropertySource({"classpath:application.properties"})
@EnableTransactionManagement
@EnableJpaRepositories(
	basePackages = {
		"kr.co.tagoplus.auth",
		"kr.co.tagoplus.code",
		"kr.co.tagoplus.common",
		"kr.co.tagoplus.community",
		"kr.co.tagoplus.course",
		"kr.co.tagoplus.customer",
		"kr.co.tagoplus.equipment",
		"kr.co.tagoplus.file",
		"kr.co.tagoplus.log",
		"kr.co.tagoplus.notification",
		"kr.co.tagoplus.popup",
		
	},
	entityManagerFactoryRef = "entityManager",
	transactionManagerRef = "transactionManager"
)
public class DataConfig {

	@Autowired
	private Environment env;

	@Primary
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManager() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		Map<String, Object> properties = new HashMap<>();
        properties.put("hibernate.hbm2ddl.auto", env.getProperty("spring.jpa.hibernate.ddl-auto"));
        properties.put("hibernate.dialect", env.getProperty("spring.jpa.database-platform"));

		em.setDataSource(dataSource());
		em.setPackagesToScan(new String[] {
			"kr.co.tagoplus.auth",
			"kr.co.tagoplus.code",
			"kr.co.tagoplus.common",
			"kr.co.tagoplus.community",
			"kr.co.tagoplus.course",
			"kr.co.tagoplus.customer",
			"kr.co.tagoplus.equipment",
			"kr.co.tagoplus.file",
			"kr.co.tagoplus.log",
			"kr.co.tagoplus.notification",
			"kr.co.tagoplus.popup",
		});
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaPropertyMap(properties);

		return em;
	}

	@Primary
	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		dataSource.setDriverClassName(env.getProperty("spring.datasource.driverClassName"));
		dataSource.setUrl(env.getProperty("spring.datasource.url"));
		dataSource.setUsername(env.getProperty("spring.datasource.username"));
		dataSource.setPassword(env.getProperty("spring.datasource.password"));

		return dataSource;
	}

	@Primary
	@Bean
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();

		transactionManager.setEntityManagerFactory(entityManager().getObject());

		return transactionManager;
	}
}