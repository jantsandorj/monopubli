package kr.co.tagoplus.admin.notification.controller;

import java.util.List;
import java.util.Map;

import kr.co.tagoplus.common.helper.UserDetailsHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.notification.entity.MailHistory;
import kr.co.tagoplus.notification.entity.MailTemplate;
import kr.co.tagoplus.notification.service.MailHistoryService;
import kr.co.tagoplus.notification.service.MailTemplateService;

@RestController
public class AdminMailRestController {

	@Autowired
	private MailHistoryService mailHistoryService;
	
	@Autowired
	private MailTemplateService mailTemplateService;
	
	@GetMapping(value = "/api/mail/templates")
	public ResponseEntity<Object> getMailTemplateList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<MailTemplate> mailTemplates = mailTemplateService.getPagedByFilter(params, pageable);

		return ResponseEntityUtil.list(mailTemplates);
	}

	@GetMapping(value = "/api/mail/templates/{seq:\\d+}")
	public ResponseEntity<Object> getMailTemplateDetail(@PathVariable Long seq) {
		MailTemplate mailTemplate = mailTemplateService.getById(seq);
		if (mailTemplate != null) {
			return ResponseEntityUtil.success(mailTemplate);
		}

		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/mail/templates/create")
	public ResponseEntity<Object> postMailTemplateCreate(MailTemplate mailTemplate, BindingResult binding , Authentication authentication) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		mailTemplate.setCreatedBy(UserDetailsHelper.findLoggedInSeq(authentication));
		mailTemplate.setUseYn("Y");

		int affactedRows = mailTemplateService.insert(mailTemplate);
		if (affactedRows > 0) {
			return ResponseEntityUtil.success(mailTemplate);
		}

		return ResponseEntityUtil.error("error.insert");
	}

	@PostMapping(value = "/api/mail/templates/update")
	public ResponseEntity<Object> postMailTemplateUpdate(MailTemplate mailTemplate, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		int affactedRows = mailTemplateService.update(mailTemplate);
		if (affactedRows > 0) {
			return ResponseEntityUtil.success(mailTemplate);
		}

		return ResponseEntityUtil.error("error.update");
	}

	@PostMapping(value = "/api/mail/templates/delete/{seq}")
	public ResponseEntity<Object> deleteAdmins(@PathVariable Long seq) {

		int affactedRows = mailTemplateService.deleteById(seq);
		if (affactedRows > 0) {
			return ResponseEntityUtil.success(null);
		}			

		return ResponseEntityUtil.error("error.delete");
	}
	
	@PostMapping(value = "/api/mail/send")
	public ResponseEntity<Object> postMailSend(MailHistory mailHistory, BindingResult binding, Authentication authentication) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		mailHistory.setSenderUsername(authentication.getName());

		if("R".equals(mailHistory.getSendType())){
			int seq = mailHistoryService.insertScheduledMail(mailHistory);
			if (seq > 0) {
				return ResponseEntityUtil.success(null);
			}

			return ResponseEntityUtil.error("error.delete");
		}

		int affactedRows = mailHistoryService.send(mailHistory);
		if (affactedRows > 0) {
			return ResponseEntityUtil.success(null);
		}

		return ResponseEntityUtil.error("error.delete");
	}
	
	@GetMapping(value = "/api/mail/histories")
	public ResponseEntity<Object> getMailHistoryList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<MailHistory> mailHistories = mailHistoryService.getPagedByFilter(params, pageable);

		return ResponseEntityUtil.list(mailHistories);
	}

	@GetMapping(value = "/api/mail/histories/{seq:\\d+}")
	public ResponseEntity<Object> getMailHistoryDetail(@PathVariable Long seq) {
		MailHistory mailHistory = mailHistoryService.getById(seq);
		if (mailHistory != null) {
			return ResponseEntityUtil.success(mailHistory);
		}

		return ResponseEntityUtil.empty();
	}

	@GetMapping(value = "/api/mail/history/group/list")
	public ResponseEntity<Object> getMailHistoryGroupList(@RequestParam Map<String, Object> params, Pageable pageable) {
		List<MailHistory> mailHistories = mailHistoryService.getGroupedList(params, pageable);

		return ResponseEntityUtil.success(mailHistories);
	}

}
