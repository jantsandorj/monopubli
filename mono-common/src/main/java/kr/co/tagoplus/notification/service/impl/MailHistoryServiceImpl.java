package kr.co.tagoplus.notification.service.impl;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.auth.service.UserService;
import kr.co.tagoplus.notification.entity.Email;
import kr.co.tagoplus.settings.entity.SiteInfo;
import kr.co.tagoplus.settings.service.SiteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.notification.entity.MailHistory;
import kr.co.tagoplus.notification.service.EmailService;
import kr.co.tagoplus.notification.service.MailHistoryMapper;
import kr.co.tagoplus.notification.service.MailHistoryService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class MailHistoryServiceImpl extends AbstractGenericServiceImpl<MailHistory, Long> implements MailHistoryService {

	@Autowired
	private MailHistoryMapper mapper;
	
	@Autowired
	private EmailService emailService;

	@Autowired
	private SiteInfoService siteInfoService;

	@Autowired
	private UserService userService;

	@Autowired
	private AdminService adminService;
	
	@Override
	protected GenericMapper<MailHistory, Long> getMapper() {
		return mapper;
	}

	@Override
	public int send(MailHistory mailHistory) {

		Map<String, Object> params = new HashMap<String, Object>();

		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		SimpleDateFormat simpleDateFormatUnique = new SimpleDateFormat("yyyyMMddhhmmss");

		String date = simpleDateFormat.format(new Date());
		String dateUnique = simpleDateFormatUnique.format(new Date());

		SiteInfo siteInfo = siteInfoService.getSiteInfo();

		String subject = mailHistory.getSubject();
		String mailBody = mailHistory.getContent();
		String siteName = siteInfo.getSiteNm();
		String siteUrl = siteInfo.getSiteUrl();
		String siteTelephone = siteInfo.getContactTel();

		mailBody.replaceAll("#\\[date\\]", date);
		mailBody.replaceAll("#\\[site_name\\]", siteName);
		mailBody.replaceAll("#\\[site_url\\]", siteUrl);
		mailBody.replaceAll("#\\[site_tel\\]", siteTelephone);

		String[] sendMailArr = mailHistory.getRecipientCc().split(",");

		for(String email : sendMailArr){
			if("USER".equals(mailHistory.getTargetGroup())){
				User userInfo = userService.getByEmail(email);
				if(userInfo != null){
					mailBody.replaceAll("#\\[mem_id\\]", userInfo.getUsername());
					mailBody.replaceAll("#\\[mem_name\\]", userInfo.getFullname());
					mailHistory.setReceiverSeq(userInfo.getSeq());
					mailHistory.setReceiverFullname(userInfo.getFullname());
					mailHistory.setReceiverUsername(userInfo.getUsername());
				} else {
					mailBody.replaceAll("#\\[mem_id\\]", "");
					mailBody.replaceAll("#\\[mem_name\\]", "");
				}
			} else if("ADMIN".equals(mailHistory.getTargetGroup())){
				Admin adminInfo = adminService.getByEmail(email);
				if(adminInfo != null){
					mailBody.replaceAll("#\\[mem_id\\]", adminInfo.getUsername());
					mailBody.replaceAll("#\\[mem_name\\]", adminInfo.getFullname());
					mailHistory.setReceiverSeq(adminInfo.getSeq());
					mailHistory.setReceiverFullname(adminInfo.getFullname());
					mailHistory.setReceiverUsername(adminInfo.getUsername());
				} else {
					mailBody.replaceAll("#\\[mem_id\\]", "");
					mailBody.replaceAll("#\\[mem_name\\]", "");
				}
			} else if("ALL".equals(mailHistory.getTargetGroup())){
				Admin adminInfo = adminService.getByEmail(email);
				User userInfo = userService.getByEmail(email);
				if(adminInfo != null){
					mailBody.replaceAll("#\\[mem_id\\]", adminInfo.getUsername());
					mailBody.replaceAll("#\\[mem_name\\]", adminInfo.getFullname());
					mailHistory.setReceiverSeq(adminInfo.getSeq());
					mailHistory.setReceiverFullname(adminInfo.getFullname());
					mailHistory.setReceiverUsername(adminInfo.getUsername());
				} else if(userInfo != null) {
					mailBody.replaceAll("#\\[mem_id\\]", userInfo.getUsername());
					mailBody.replaceAll("#\\[mem_name\\]", userInfo.getFullname());
					mailHistory.setReceiverSeq(userInfo.getSeq());
					mailHistory.setReceiverFullname(userInfo.getFullname());
					mailHistory.setReceiverUsername(userInfo.getUsername());
				} else {
					mailBody.replaceAll("#\\[mem_id\\]", "");
					mailBody.replaceAll("#\\[mem_name\\]", "");
				}
			}

			params.put("mailBody", mailBody);

			mailHistory.setGroupId(dateUnique);
			mailHistory.setRecipientCc(email);
			mailHistory.setStatus("SUCCESS");
			mailHistory.setSendDate(simpleDateFormat.format(new Date()));
			int seq = mapper.insert(mailHistory);

			int emailSendCount = emailService.sendWithTemplateWithUpdateHistory(new Email(email, subject, "mail/mail_html_tmpl", params));

			if(emailSendCount == 0){
				mailHistory.setStatus("FAILED");
				mailHistory.setSendDate(simpleDateFormat.format(new Date()));
				mapper.update(mailHistory);
			}
		}

		return 1;
	}
	@Override
	public int insertScheduledMail(MailHistory mailHistory) {

		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		SimpleDateFormat simpleDateFormatUnique = new SimpleDateFormat("yyyyMMddhhmmss");

		String dateUnique = simpleDateFormatUnique.format(new Date());

		String[] sendMailArr = mailHistory.getRecipientCc().split(",");

		for(String email : sendMailArr){
			if("USER".equals(mailHistory.getTargetGroup())){
				User userInfo = userService.getByEmail(email);
				if(userInfo != null){
					mailHistory.setReceiverSeq(userInfo.getSeq());
					mailHistory.setReceiverFullname(userInfo.getFullname());
					mailHistory.setReceiverUsername(userInfo.getUsername());
				}
			} else if("ADMIN".equals(mailHistory.getTargetGroup())){
				Admin adminInfo = adminService.getByEmail(email);
				if(adminInfo != null){
					mailHistory.setReceiverSeq(adminInfo.getSeq());
					mailHistory.setReceiverFullname(adminInfo.getFullname());
					mailHistory.setReceiverUsername(adminInfo.getUsername());
				}
			} else if("ALL".equals(mailHistory.getTargetGroup())){
				Admin adminInfo = adminService.getByEmail(email);
				User userInfo = userService.getByEmail(email);
				if(adminInfo != null){
					mailHistory.setReceiverSeq(adminInfo.getSeq());
					mailHistory.setReceiverFullname(adminInfo.getFullname());
					mailHistory.setReceiverUsername(adminInfo.getUsername());
				} else if(userInfo != null) {
					mailHistory.setReceiverSeq(userInfo.getSeq());
					mailHistory.setReceiverFullname(userInfo.getFullname());
					mailHistory.setReceiverUsername(userInfo.getUsername());
				}
			}

			mailHistory.setGroupId(dateUnique);
			mailHistory.setRecipientCc(email);
			mailHistory.setStatus("SCHEDULED");
			mailHistory.setSendDate("");
			int seq = mapper.insert(mailHistory);
		}

		return 1;
	}


	@Scheduled(cron = "0 0/5 * * * *")
	public void sendScheduledMail() {

		List<MailHistory> list = mapper.selectListScheduledMail();
		if(list != null){
			for(MailHistory mailHistory : list){

				SimpleDateFormat schedDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
				String schedDate = mailHistory.getSchedDate();
				String now =  schedDateFormat.format(new Date());

				if(schedDate.equals(now)){
					SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
					String date = simpleDateFormat.format(new Date());

					SiteInfo siteInfo = siteInfoService.getSiteInfo();

					String subject = mailHistory.getSubject();
					String mailBody = mailHistory.getContent();
					String siteName = siteInfo.getSiteNm();
					String siteUrl = siteInfo.getSiteUrl();
					String siteTelephone = siteInfo.getContactTel();

					mailBody.replaceAll("#\\[date\\]", date);
					mailBody.replaceAll("#\\[site_name\\]", siteName);
					mailBody.replaceAll("#\\[site_url\\]", siteUrl);
					mailBody.replaceAll("#\\[site_tel\\]", siteTelephone);

					String email = mailHistory.getRecipientCc();

					if("USER".equals(mailHistory.getTargetGroup())){
						User userInfo = userService.getByEmail(email);
						if(userInfo != null){
							mailBody.replaceAll("#\\[mem_id\\]", userInfo.getUsername());
							mailBody.replaceAll("#\\[mem_name\\]", userInfo.getFullname());
							mailHistory.setReceiverSeq(userInfo.getSeq());
							mailHistory.setReceiverFullname(userInfo.getFullname());
							mailHistory.setReceiverUsername(userInfo.getUsername());
						} else {
							mailBody.replaceAll("#\\[mem_id\\]", "");
							mailBody.replaceAll("#\\[mem_name\\]", "");
						}
					} else if("ADMIN".equals(mailHistory.getTargetGroup())){
						Admin adminInfo = adminService.getByEmail(email);
						if(adminInfo != null){
							mailBody.replaceAll("#\\[mem_id\\]", adminInfo.getUsername());
							mailBody.replaceAll("#\\[mem_name\\]", adminInfo.getFullname());
							mailHistory.setReceiverSeq(adminInfo.getSeq());
							mailHistory.setReceiverFullname(adminInfo.getFullname());
							mailHistory.setReceiverUsername(adminInfo.getUsername());
						} else {
							mailBody.replaceAll("#\\[mem_id\\]", "");
							mailBody.replaceAll("#\\[mem_name\\]", "");
						}
					} else if("ALL".equals(mailHistory.getTargetGroup())) {
						Admin adminInfo = adminService.getByEmail(email);
						User userInfo = userService.getByEmail(email);
						if (adminInfo != null) {
							mailBody.replaceAll("#\\[mem_id\\]", adminInfo.getUsername());
							mailBody.replaceAll("#\\[mem_name\\]", adminInfo.getFullname());
							mailHistory.setReceiverSeq(adminInfo.getSeq());
							mailHistory.setReceiverFullname(adminInfo.getFullname());
							mailHistory.setReceiverUsername(adminInfo.getUsername());
						} else if (userInfo != null) {
							mailBody.replaceAll("#\\[mem_id\\]", userInfo.getUsername());
							mailBody.replaceAll("#\\[mem_name\\]", userInfo.getFullname());
							mailHistory.setReceiverSeq(userInfo.getSeq());
							mailHistory.setReceiverFullname(userInfo.getFullname());
							mailHistory.setReceiverUsername(userInfo.getUsername());
						} else {
							mailBody.replaceAll("#\\[mem_id\\]", "");
							mailBody.replaceAll("#\\[mem_name\\]", "");
						}
					}

					Map<String, Object> params = new HashMap<String, Object>();
					params.put("mailBody", mailBody);
					int emailSendCount = emailService.sendWithTemplateWithUpdateHistory(new Email(email, subject, "mail/mail_html_tmpl", params));

					mailHistory.setStatus("SUCCESS");
					if (emailSendCount == 0) {
						mailHistory.setStatus("FAILED");
					}
					mailHistory.setSendDate(simpleDateFormat.format(new Date()));
					mapper.update(mailHistory);
				}

			}
		}

	}

	public List<MailHistory> getGroupedList(Map<String, Object> params, Pageable pageable){

		if(params != null) {
			params.put("page", pageable);
		}

		List<MailHistory> list = mapper.getGroupedList(params);

		return list;
	}
}