package kr.co.tagoplus.user.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.community.entity.Notice;
import kr.co.tagoplus.community.service.NoticeService;
//import kr.co.tagoplus.file.service.FileService;
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
import java.util.Map;

@RestController
public class ApiNoticeRestController {
    private static Logger logger = LoggerFactory.getLogger(ApiNoticeRestController.class);

    @Autowired
    private NoticeService noticeService;
    
    //@Autowired
	//private FileService fileService;

    @GetMapping(value = "/web/notice/list")
    public ResponseEntity<Object> getNoticeList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        params.put("exposureYn", "Y");
    	Page<Notice> notices = noticeService.getPagedByFilter(params, pageable);
        return new ResponseEntity<Object>(notices, HttpStatus.OK);
    }

    @GetMapping(value = "/web/notice/detail")
    public ResponseEntity<Object> getNoticeDetail(@RequestParam Map<String, Object> params, Authentication authentication) throws CustomResponseException {

        Notice notice = null;
        Notice prevNotice = null;
        Notice nextNotice = null;

        try {
            int seq = Integer.parseInt(params.get("seq").toString());
            int num =Integer.parseInt(params.get("num").toString());

            if (seq < 1 || num < 1) {
                return ResponseEntityUtil.error("", "Seq or num cannot be null");
            }

            notice = noticeService.getBySeq(seq);
            noticeService.updateViewCount(seq);


            params.put("exposureYn", "Y");
            params.put("rowNum", num+1);
            prevNotice = noticeService.getPrevNext(params);

            params.put("rowNum", num-1);
            nextNotice = noticeService.getPrevNext(params);

        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("data", notice);
        result.put("prevNotice", prevNotice);
        result.put("nextNotice", nextNotice);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
    
}
