package kr.co.tagoplus.notification.service;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.notification.entity.Email;


@Mapper
public interface EmailMapper extends GenericMapper<Email, Long> {

	Email getByRecipientAndToken(String username, String verificationCode);
	
}
