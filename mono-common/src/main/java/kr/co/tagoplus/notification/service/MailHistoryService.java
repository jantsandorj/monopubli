package kr.co.tagoplus.notification.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.notification.entity.MailHistory;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface MailHistoryService extends GenericService<MailHistory, Long> {

	public int send(MailHistory mailHistory);
	public int insertScheduledMail(MailHistory mailHistory);
	public List<MailHistory> getGroupedList(Map<String, Object> params, Pageable pageable);

}