package kr.co.tagoplus.user.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.community.entity.Qna;
import kr.co.tagoplus.community.service.QnaService;
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
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class ApiQnaRestController {
    private static Logger logger = LoggerFactory.getLogger(ApiQnaRestController.class);

    @Autowired
    private QnaService qnaService;
    
    //@Autowired
	//private FileService fileService;

    @GetMapping(value = "/web/qna/list")
    public ResponseEntity<Object> getQnaList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
    	Page<Qna> listQna = qnaService.getPagedByFilter(params, pageable);
        return new ResponseEntity<Object>(listQna, HttpStatus.OK);
    }

    @GetMapping(value = "/web/qna/detail/{seq}")
    public ResponseEntity<Object> getQnaDetail(@PathVariable int seq, Authentication authentication) throws CustomResponseException {

        Qna qna = null;

        try {
        	qna = qnaService.getBySeq(seq);
        	if(qna != null){
        	    qnaService.updateViewCount(qna.getSeq());
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("data", qna);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }


    @PostMapping(value = "/web/qna/register")
    public ResponseEntity<Object> insertQna(Qna qna, BindingResult binding, Authentication authentication) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }
        Map<String, Object> result = new HashedMap<>();

        if(authentication == null){
            result.put("message" , "please login first");
            return ResponseEntityUtil.success(result);
        }

        qna.setUsername(authentication.getName());
        qna.setIsAnswered("N");
        qna.setCreatedBy(UserDetailsHelper.findLoggedInSeq(authentication));
        int affactedRows = qnaService.insert(qna);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(qna);
        }

        return ResponseEntityUtil.error("error.update");
    }

    @PostMapping(value = "/web/qna/update")
    public ResponseEntity<Object> updateQna(Qna qna, BindingResult binding, Authentication authentication) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }
        Map<String, Object> result = new HashedMap<>();

        if(authentication == null){
            result.put("message" , "please login first");
            return ResponseEntityUtil.success(result);
        }
        Qna detail = null;
        if(qna.getSeq() > 0){
            detail = qnaService.getBySeq(qna.getSeq());
        }

        if(detail == null){
            result.put("message" , "qna not found");
            return ResponseEntityUtil.success(result);
        } else if (!detail.getUsername().equals(authentication.getName())){
            result.put("message" , "you cannot modify this qna!!!");
            return ResponseEntityUtil.success(result);
        }

        qna.setModifiedBy(UserDetailsHelper.findLoggedInSeq(authentication));
        int affactedRows = qnaService.update(qna);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(qna);
        }

        return ResponseEntityUtil.error("error.update");
    }
}
