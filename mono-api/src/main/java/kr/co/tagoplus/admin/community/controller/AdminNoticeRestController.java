package kr.co.tagoplus.admin.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.RequestProcessingHelper;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFileList;
import kr.co.tagoplus.common.model.StringIdList;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.Notice;
import kr.co.tagoplus.community.service.NoticeService;
import kr.co.tagoplus.file.service.FileService;

import org.apache.commons.collections4.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
public class AdminNoticeRestController {
    private static Logger logger = LoggerFactory.getLogger(AdminNoticeRestController.class);

    @Autowired
    private NoticeService noticeService;
    
    @Autowired
	private FileService fileService;

    @GetMapping(value = "/api/notice/list")
    public ResponseEntity<Object> getNoticeList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        //if (!UserDetailsHelper.isAuthenticated(authentication)) {
        //    throw new CustomResponseException("error.access.denied");
        //}

        Page<Notice> notices = noticeService.getPagedByFilter(params, pageable);

        return new ResponseEntity<Object>(notices, HttpStatus.OK);
    }

    @GetMapping(value = "/api/notice/detail/{seq}")
    public ResponseEntity<Object> getNoticeDetail(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
        //if (!UserDetailsHelper.isAuthenticated(authentication)) {
        //    throw new CustomResponseException("error.access.denied");
        //}

        Notice notice = null;

        try {
            notice = noticeService.getBySeq(seq);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("data", notice);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/notice/create")
    public ResponseEntity<Object> createNotice(AttachFileList attachments, Notice notice, Authentication authentication, HttpServletRequest request) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int insertCount = 0;

        try {
            if(attachments.getFiles() != null) {
            	long fileGroupSeq = fileService.generateFileGroup();
            	notice.setFileGroupSeq(fileGroupSeq);
            	fileService.storeFile(attachments.getFiles(), "Notice", fileGroupSeq);
            }
        	
        	notice.setCreatedBy(UserDetailsHelper.findLoggedInSeq(authentication));
            notice.setCreatedIp(RequestProcessingHelper.getClientIP(request));
            notice.setCreatedDate(DateUtil.getTimestampAsCompact());

            insertCount = noticeService.insert(notice);

            if (insertCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/notice/update")
    public ResponseEntity<Object> updateNotice(AttachFileList attachments, Notice notice, Authentication authentication, HttpServletRequest request) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int updateCount = 0;

        try {
            if(attachments.getFiles() != null) {
            	if(Long.valueOf(notice.getFileGroupSeq()) == null || notice.getFileGroupSeq() == 0)
            		notice.setFileGroupSeq(fileService.generateFileGroup());
            	else
            		fileService.deleteByFileGroup(notice.getFileGroupSeq());
            	fileService.storeFile(attachments.getFiles(), "Notice", notice.getFileGroupSeq());
            }
        	
        	notice.setModifiedBy(UserDetailsHelper.findLoggedInSeq(authentication));
            notice.setModifiedIp(RequestProcessingHelper.getClientIP(request));

            updateCount = noticeService.update(notice);

            if (updateCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/notice/delete")
    public ResponseEntity<Object> deleteNoticeByBulk(@RequestBody StringIdList seqs, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int deleteCount = 0;

        try {
            deleteCount = noticeService.deleteByBulk(seqs);

            if (deleteCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success.delete");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/notice/delete/{seq}")
    public ResponseEntity<Object> deleteNotice(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int deleteCount = 0;

        try {
            deleteCount = noticeService.deleteById(seq);

            if (deleteCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success.delete");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
}
