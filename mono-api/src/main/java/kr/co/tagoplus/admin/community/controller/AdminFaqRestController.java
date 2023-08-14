package kr.co.tagoplus.admin.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.RequestProcessingHelper;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFileList;
import kr.co.tagoplus.common.model.StringIdList;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.Faq;
import kr.co.tagoplus.community.service.FaqService;
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
public class AdminFaqRestController {
    private static Logger logger = LoggerFactory.getLogger(AdminFaqRestController.class);

    @Autowired
    private FaqService faqService;
    
    @Autowired
	private FileService fileService;

    @GetMapping(value = "/api/faq/list")
    public ResponseEntity<Object> getFaqList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Page<Faq> faqList = faqService.getPagedByFilter(params, pageable);

        return new ResponseEntity<Object>(faqList, HttpStatus.OK);
    }

    @GetMapping(value = "/api/faq/detail/{seq}")
    public ResponseEntity<Object> getFaqDetail(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Faq faq = null;

        try {
            faq = faqService.getBySeq(seq);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("data", faq);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/faq/create")
    public ResponseEntity<Object> createFaq(AttachFileList attach, Faq faq,  Authentication authentication, HttpServletRequest request) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Map<Object, String> result = new HashedMap<Object, String>();
        result.put("status", "error");
        int resultCount = 0;

        try {
            Long loggedSeq = UserDetailsHelper.findLoggedInSeq(authentication);
            String clientIp = RequestProcessingHelper.getClientIP(request);
            
            if(attach.getFiles() != null) {
            	long fileGroupSeq = fileService.generateFileGroup();
                faq.setFileGroupSeq(fileGroupSeq);
            	fileService.storeFile(attach.getFiles(), "FAQ", fileGroupSeq);

            }
            
            faq.setCreatedBy(loggedSeq);
            faq.setCreatedDate(DateUtil.getTimestampAsCompact());
            faq.setCreatedIp(clientIp);

            resultCount = faqService.insert(faq);

            if(resultCount > 0) {
                result.put("message", "message.success");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.insert", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/faq/update")
    public ResponseEntity<Object> updateFaqBySeq(AttachFileList attach, Faq faq, HttpServletRequest request, Authentication authentication) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("message", "error");
        int resultCount = 0;

        try {
            Long answerUserSeq = UserDetailsHelper.findLoggedInSeq(authentication);
            String clientIp = RequestProcessingHelper.getClientIP(request);
            
            if(attach.getFiles() != null) {
            	if(Long.valueOf(faq.getFileGroupSeq()) == null || faq.getFileGroupSeq() == 0)
            		faq.setFileGroupSeq(fileService.generateFileGroup());
            	else
            		fileService.deleteByFileGroup(faq.getFileGroupSeq());
            	fileService.storeFile(attach.getFiles(), "FAQ", faq.getFileGroupSeq());
            }

            faq.setModifiedBy(answerUserSeq);
            faq.setModifiedIp(clientIp);

//            long answerFileGroupSeq = fileService.generateFileGroup();
//            qna.setAnswerFileGroupSeq(answerFileGroupSeq);

            resultCount = faqService.update(faq);

            if(resultCount > 0) {
                result.put("message", "message.success");
                result.put("status", "success");
//                fileService.storeFile(attachment.getFiles(), "QNA", answerFileGroupSeq);
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.update", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/faq/delete")
    public ResponseEntity<Object> deleteBulkFaq(@RequestBody StringIdList seqs, Authentication authentication) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
        }

        Map<Object, String> result = new HashedMap<Object, String>();
        result.put("status", "error");
        int resultCount = 0;

        try {
            resultCount = faqService.deleteByBulk(seqs);

            if(resultCount > 0) {
                result.put("message", "message.success.delete");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.delete", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/faq/delete/{seq}")
    public ResponseEntity<Object> deleteFaq(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
        if(!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
        }

        Map<Object, String> result = new HashedMap<Object, String>();
        result.put("status", "error");
        int resultCount = 0;

        try {
            resultCount = faqService.deleteById(seq);

            if(resultCount > 0) {
                result.put("message", "message.success.delete");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.delete", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

}
