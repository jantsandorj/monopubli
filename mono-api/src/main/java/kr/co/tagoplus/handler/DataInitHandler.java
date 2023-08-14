package kr.co.tagoplus.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminService;

@Component
public class DataInitHandler {
	
	@Autowired
	private AdminService adminService;
	
	@EventListener
	public void inidData(ApplicationReadyEvent event) {
		if(adminService.getByUsername("admin@gmail.com") == null) {
			Admin admin = new Admin();
			admin.setUsername("admin@gmail.com");
			admin.setPassword("123456");
			admin.setFullname("관리자");
			
			adminService.register(admin);
		}
	}

}
