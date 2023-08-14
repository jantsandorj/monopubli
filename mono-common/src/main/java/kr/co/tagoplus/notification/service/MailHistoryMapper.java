package kr.co.tagoplus.notification.service;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.notification.entity.MailHistory;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

@Mapper
public interface MailHistoryMapper extends GenericMapper<MailHistory, Long> {

    List<MailHistory> getGroupedList(Map<String, Object> params);
    List<MailHistory> selectListScheduledMail();
}
