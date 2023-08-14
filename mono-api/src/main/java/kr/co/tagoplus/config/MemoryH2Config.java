package kr.co.tagoplus.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@PropertySource({"classpath:config/db.jwt.properties"})
@EnableJpaRepositories(
	basePackages = "kr.co.tagoplus.jwt",
	entityManagerFactoryRef = "memoryH2EntityManager",
	transactionManagerRef = "memoryH2TransactionManager"
)
public class MemoryH2Config {

	@Autowired
	private Environment env;
	
	@Bean(name = "memoryH2EntityManager")
	public LocalContainerEntityManagerFactoryBean memoryH2EntityManager() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(memoryH2DataSource());
		em.setPackagesToScan("kr.co.tagoplus.jwt");
		em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		
		Properties properties = new Properties();
		properties.put("hibernate.hbm2ddl.auto", env.getProperty("jwt.jpa.hibernate.ddl-auto"));
		properties.put("hibernate.dialect", env.getProperty("jwt.jpa.database-platform"));
		em.setJpaProperties(properties);
		
		return em;
	}
	
	@Bean(name = "memoryH2DataSource")
	public DataSource memoryH2DataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		
		dataSource.setDriverClassName(env.getProperty("jwt.datasource.driverClassName"));
		dataSource.setUrl(env.getProperty("jwt.datasource.url"));
		dataSource.setUsername(env.getProperty("jwt.datasource.username"));
		dataSource.setPassword(env.getProperty("jwt.datasource.password"));
		
		return dataSource;
	}
	
	@Bean(name = "memoryH2TransactionManager")
	public PlatformTransactionManager memoryH2TransactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		
		transactionManager.setEntityManagerFactory(memoryH2EntityManager().getObject());
		
		return transactionManager;
	}
}