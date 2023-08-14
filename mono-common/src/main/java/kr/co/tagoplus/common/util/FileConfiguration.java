package kr.co.tagoplus.common.util;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Configuration
@Component("fileConfiguration")
@PropertySource("classpath:application.properties")
public class FileConfiguration {

	@Value("${file.path.base}")
	private String basePath;

	@Value("${file.ban.list}")
	private List<String> banList;

	public String getBasePath() {
		return basePath;
	}

	public void setBasePath(String basePath) {
		this.basePath = basePath;
	}

	public List<String> getBanList() {
		return banList;
	}

	public void setBanList(List<String> banList) {
		this.banList = banList;
	}
}