package kr.co.tagoplus.admin.dashboard.controller;

import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.auth.service.UserService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.community.entity.Notice;
import kr.co.tagoplus.community.entity.Qna;
import kr.co.tagoplus.community.service.BoardService;
import kr.co.tagoplus.community.service.NoticeService;
import kr.co.tagoplus.community.service.QnaService;
import kr.co.tagoplus.settings.entity.SystemSettings;
import kr.co.tagoplus.settings.service.SystemSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class AdminDashboardRestController {

	@Autowired
	private UserService userService;

	@Autowired
	private AdminService adminService;

	@Autowired
	private BoardService boardService;

	@Autowired
	private SystemSettingsService systemSettingsService;

	@Autowired
	private NoticeService noticeService;

	@Autowired
	private QnaService qnaService;

	@GetMapping(value = "/api/dashboard/info")
	public ResponseEntity<Object> getDashboardInfo() {

		Map<String, Object> data = new HashMap<>();
		try	{
			SystemSettings systemSettings = systemSettingsService.getSystemSettings();
			int adminSessionTime = systemSettings.getAdminSessionTime();

			data.put("users", userService.getAllUserCount());
			data.put("admins", adminService.getAllAdminCounts());
			data.put("onlineAdmins", adminService.getOnlineAdminCounts(adminSessionTime));
			data.put("boards", boardService.getAllCounts());
			data.put("lastMonthUsers", userService.getAllRegisteredUserLastMonthCount());
			data.put("lastMonthBoards", boardService.getAllRegisteredBoardLastMonthCount());

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ResponseEntityUtil.success(data);
	}

	@GetMapping(value = "/api/dashboard/latest/notice/boards")
	public ResponseEntity<Object> getLatestNoticeBoards() {
		List<Notice> notices = noticeService.getLatestNotices();
		return ResponseEntityUtil.success(notices);
	}

	@GetMapping(value = "/api/dashboard/latest/qna/boards")
	public ResponseEntity<Object> getLatestQnaBoards() {

		List<Qna> qnas = qnaService.getLatestQnas();
		return ResponseEntityUtil.success(qnas);
	}

}