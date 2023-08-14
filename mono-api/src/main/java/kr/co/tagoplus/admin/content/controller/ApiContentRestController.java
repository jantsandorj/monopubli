package kr.co.tagoplus.admin.content.controller;

import kr.co.tagoplus.code.service.CodeService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.content.entity.Content;
import kr.co.tagoplus.content.service.ContentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class ApiContentRestController {
    private static Logger logger = LoggerFactory.getLogger(ApiContentRestController.class);

    @Autowired
    private CodeService codeService;

    @Autowired
    private ContentService contentService;


    @GetMapping(value = "/api/content")
    public ResponseEntity<Object> getContentList(
            @RequestParam Map<String, Object> parameters,
            Pageable pageable, Authentication authentication) throws CustomResponseException {
        //if (!UserDetailsHelper.isAuthenticated(authentication)) {
        //    throw new CustomResponseException("error.access.denied");
        //}

        Map<String, Object> result = new HashMap<String, Object>();

        Page<Content> contentList = null;
        try {
            logger.info("parameters: " + parameters.values().toString());
            contentList = contentService.getPagedByFilter(parameters, pageable);

            result.put("draw", parameters.get("draw"));
            result.put("recordsTotal", contentList.getTotalElements());
            result.put("recordsFiltered", contentList.getTotalElements());

            result.put("data", contentList.getContent());
            result.put("message", "message.success");
        } catch (Exception e) {
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(contentList, HttpStatus.OK);
    }

    @GetMapping(value = "/api/content/{seq}")
    public ResponseEntity<Object> contentDetail(
            @PathVariable(name = "seq") String seq, Authentication authentication) throws CustomResponseException {
        //if (!UserDetailsHelper.isAuthenticated(authentication)) {
        //    throw new CustomResponseException("error.access.denied");
        //}

        Optional<Content> content = null;
        try {
            content = contentService.findById(seq);

            if (content.isEmpty()) {
                throw new CustomResponseException("error.nodata");
            }

        } catch (Exception e) {
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashMap<>();
        result.put("data", content);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/content/create")
    public ResponseEntity<Object> createContent(
            @RequestBody Content content,
            BindingResult binding,
            @RequestParam Map<String, Object> parameters,
            HttpServletRequest request, Authentication authentication) throws CustomResponseException {
        if (binding.hasErrors()) {
            throw new CustomResponseException("error.binding");
        }

        //if (!UserDetailsHelper.isAuthenticated(authentication)) {
        //    throw new CustomResponseException("error.access.denied");
        //}
		Long userId = UserDetailsHelper.findLoggedInSeq(authentication);
        content.setCreatedBy(userId);

        Map<String, Object> result = new HashMap<>();

        try {
            contentService.insert(content);
            result.put("data", content);
            result.put("message", "message.success.insert");
            result.put("status", "success");
        } catch (Exception e) {
            logger.error("error: ", e);
            throw new CustomResponseException("error.insert", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/content/update")
    public ResponseEntity<Object> updateContent(
            Authentication authentication,
            @RequestBody Content content,
            BindingResult binding,
            HttpServletRequest request) throws CustomResponseException {
        if (binding.hasErrors()) {
            throw new CustomResponseException("error.binding");
        }

//		if (!UserDetailsHelper.isAuthenticated(authentication)) {
//			throw new CustomResponseException("error.access.denied");
//		}
		Long userId = UserDetailsHelper.findLoggedInSeq(authentication);
        content.setModifiedBy(userId);

        Map<String, Object> result = new HashMap<String, Object>();
        try {
            contentService.update(content);
            result.put("message", "message.success.update");
            result.put("status", "success");
        } catch (Exception e) {
            logger.error("error: ", e);
            throw new CustomResponseException("error.update", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    //	updating custom fields for content
    @PostMapping(value = "/api/content/fields")
    public ResponseEntity<Object> contentUpdateFields(
            Authentication authentication,
            @RequestBody Map<String, Object> customFields,
            HttpServletRequest request) throws CustomResponseException {

		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}
		Long userId = UserDetailsHelper.findLoggedInSeq(authentication);

        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Content content = contentService.getById(customFields.get("code").toString());
            if (content != null) {
                content.setModifiedBy(userId);
                content.setContentJson(customFields.get("contentJson").toString());

                contentService.update(content);
                result.put("message", "message.success.update");
                result.put("status", "success");
            }
        } catch (Exception e) {
            logger.error("error: ", e);
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/content/delete")
    public ResponseEntity<Object> deleteContent(
            Authentication authentication,
            String seq) throws CustomResponseException {
		if (!UserDetailsHelper.isAuthenticated(authentication)) {
			throw new CustomResponseException("error.access.denied");
		}

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("status", "error");

        try {
            Content content = contentService.getById(seq);
            if (content != null) {
                contentService.deleteById(seq);
                result.put("message", "message.success.delete");
                result.put("status", "success");
            }
        } catch (Exception e) {
            throw new CustomResponseException("error.delete", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
}