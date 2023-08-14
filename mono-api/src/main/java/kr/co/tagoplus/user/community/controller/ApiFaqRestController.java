package kr.co.tagoplus.user.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.community.entity.Faq;
import kr.co.tagoplus.community.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class ApiFaqRestController {

    @Autowired
    private FaqService faqService;
    
    @GetMapping(value = "/web/faq/list")
    public ResponseEntity<Object> getQnaList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
    	Page<Faq> listFaq = faqService.getPagedByFilter(params, pageable);
        return new ResponseEntity<Object>(listFaq, HttpStatus.OK);
    }

}
