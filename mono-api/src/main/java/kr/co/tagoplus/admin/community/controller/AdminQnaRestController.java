package kr.co.tagoplus.admin.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.RequestProcessingHelper;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFileList;
import kr.co.tagoplus.common.model.StringIdList;
import kr.co.tagoplus.file.service.FileService;
import kr.co.tagoplus.community.entity.Qna;
import kr.co.tagoplus.community.service.QnaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

@RestController
public class AdminQnaRestController {
    private static Logger logger = LoggerFactory.getLogger(AdminQnaRestController.class);

    @Autowired
    private QnaService qnaService;
    @Autowired
    private FileService fileService;

    @GetMapping(value = "/api/qna/list")
    public ResponseEntity<Object> getListByFilter(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Page<Qna> qnaList = qnaService.getPagedByFilter(params, pageable);

        return new ResponseEntity<Object>(qnaList, HttpStatus.OK);
    }

    @GetMapping(value = "/api/qna/detail/{seq}")
    public ResponseEntity<Object> getQnaBySeq(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Qna qna = null;

        try {
            qna = qnaService.getBySeq(seq);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.nodata", e);
        }

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("data", qna);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/qna/update")
    public ResponseEntity<Object> updateQnaBySeq(AttachFileList attachments, Qna qna, HttpServletRequest request, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("message", "error");
        int resultCount = 0;

        try {
            String answerUsername = UserDetailsHelper.findLoggedInUsername();
            String clientIp = RequestProcessingHelper.getClientIP(request);
            qna.setIsAnswered("Y");
            qna.setModifiedBy(UserDetailsHelper.findLoggedInSeq(authentication));
            qna.setModifiedIp(clientIp);
            qna.setAnswerUsername(answerUsername);

            if(attachments.getFiles() != null) {
            	if(Long.valueOf(qna.getAnswerFileGroupSeq()) == null || qna.getAnswerFileGroupSeq() == 0) {
            		qna.setAnswerFileGroupSeq(fileService.generateFileGroup());
            	}
                fileService.storeFile(attachments.getFiles(), "QNA", qna.getAnswerFileGroupSeq());
            }

            resultCount = qnaService.update(qna);
            if (resultCount > 0) {
                result.put("message", "message.success");
                result.put("desk", "qna.success.update");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/qna/delete")
    public ResponseEntity<Object> deleteListBySeq(@RequestBody StringIdList seqs, Authentication authentication) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("message", "error");
        int resultCount = 0;

        try {
            resultCount = qnaService.deleteByBulk(seqs);
            if (resultCount > 0) {
                result.put("message", "message.success.delete");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/qna/delete/{seq}")
    public ResponseEntity<Object> deleteListBySeq(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("message", "error");
        int resultCount = 0;

        try {
            resultCount = qnaService.deleteBySeq(seq);
            if (resultCount > 0) {
                result.put("message", "message.success.delete");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }


}
