package kr.co.tagoplus.admin.common.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import kr.co.tagoplus.code.entity.Code;
import kr.co.tagoplus.code.serializer.CodeSerializer;
import kr.co.tagoplus.code.service.CodeService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AdminCodeRestController {
    private static Logger logger = LoggerFactory.getLogger(AdminCodeRestController.class);

    @Autowired
    private CodeService codeService;

    @GetMapping(value = "/api/codes")
    public ResponseEntity<Object> getCodeList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication)
            throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Page<Code> codes = codeService.getPagedByFilter(params, pageable);

        return new ResponseEntity<Object>(codes, HttpStatus.OK);
    }
    
    @GetMapping(value = "/api/groupcodes")
    public ResponseEntity<Object> getGroupCodeList(@RequestParam Map<String, Object> params, Authentication authentication)
            throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        List<Code> groupCodes = codeService.getAllGroupCodes();

        return new ResponseEntity<Object>(groupCodes, HttpStatus.OK);
    }

    @PostMapping(value = "/api/codes/create")
    public ResponseEntity<Object> createCommonCodes(
            Code code,
            BindingResult binding,
            HttpServletRequest request,
            Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        System.out.println("CONTENT:: " + request.toString());

        if (binding.hasErrors()) {
            throw new CustomResponseException("error.binding");
        }
        
        Code checkDuplicate = codeService.getByGroupAndCode(code.getCodeGroup(), code.getCode());
        Map<String, Object> result = new HashMap<>();
        
        if(checkDuplicate != null) {
        	//return ResponseEntityUtil.error("error.duplicate.code");
        	throw new CustomResponseException("error.duplicate.code");
        }
        
        try {
            codeService.insert(code);
            result.put("data", code);
            result.put("message", "message.success.insert");
            result.put("status", "success");
        } catch (Exception e) {
            logger.error("error: ", e);
            throw new CustomResponseException("error.insert", e);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = "/api/codes/{code}")
    public ResponseEntity<Object> codeDetail(
            @PathVariable(name = "code") Long seq, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Code code;
        try {
             code = codeService.getBySeq(seq);
            
             if (code == null) {
            	 throw new CustomResponseException("error.nodata");
             }

        } catch (Exception e) {
            System.out.println("ERROR:: " + e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashMap<>();
        result.put("data", code);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/codes/update")
    public ResponseEntity<Object> codeUpdate(
            Authentication authentication,
            Code codes,
            BindingResult binding,
            HttpServletRequest request) throws CustomResponseException {
        if (binding.hasErrors()) {
            throw new CustomResponseException("error.binding");
        }

        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
        // String userId = UserDetailsHelper.findLoggedInUserId(authentication);

        codes.setModifiedBy(codes.getModifiedBy());

        Map<String, Object> result = new HashMap<String, Object>();
        try {
            codeService.update(codes);
            result.put("message", "message.success.update");
            result.put("status", "success");
        } catch (Exception e) {
            System.out.println("ERROR:: " + e.getMessage());
            throw new CustomResponseException("error.update", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/codes/delete")
    public ResponseEntity<Object> deleteCodes(
            Authentication authentication,
            @RequestBody Code code) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Code codes = codeService.getByGroupAndCode(code.getCodeGroup(), code.getCode());
            
            if(codes != null) {
            	codeService.deleteByCode(code.getCodeGroup(), code.getCode());
            	result.put("message", "message.success.delete");
            	result.put("status", "success");
            }
        } catch (Exception e) {
            System.out.println("ERROR:: " + e.getMessage());
            throw new CustomResponseException("error.delete", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
    
    
    @GetMapping(value = "/api/codes/group" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> codeChild(@RequestParam(name = "codegroup") String codeGroup, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
        Map<String, Object> result = new HashMap<>();
        List<Code> codes;
        try {
        	 codes = codeService.getByGroup(codeGroup);
             if (codes == null) {
            	 throw new CustomResponseException("error.nodata");
             }

            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new SimpleModule().addSerializer(Code.class, new CodeSerializer()));

            result.put("data", codes);
            result.put("status", "success");

            return new ResponseEntity<Object>(mapper.writeValueAsString(result), HttpStatus.OK);

        } catch (Exception e) {
            System.out.println("ERROR:: " + e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }
    }

}
