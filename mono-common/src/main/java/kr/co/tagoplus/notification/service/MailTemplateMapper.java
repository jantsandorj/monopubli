package kr.co.tagoplus.notification.service;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.notification.entity.MailTemplate;

@Mapper
public interface MailTemplateMapper extends GenericMapper<MailTemplate, Long> {

}
