package kr.co.tagoplus.api.common.controller;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.form.SendTempPasswordForm;
import kr.co.tagoplus.notification.service.EmailService;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.javassist.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.util.JwtHelper;
import kr.co.tagoplus.form.AdminChangePasswordForm;
import kr.co.tagoplus.form.LoginForm;

@RestController
public class AuthController {
    protected Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AdminService adminService;

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
	private EmailService emailService;

    @PostMapping(path = "/api/login" )
    public ResponseEntity<Object> login(LoginForm loginForm, BindingResult binding, HttpServletRequest request, HttpServletResponse response) throws CustomResponseException, NotFoundException {

        Map<String, Object> result = new HashMap<String, Object>();
        Map<String, String> authResult = adminService.authenticate(loginForm);
        
        if(authResult.isEmpty()) {
        	result.put("message", "failed.user.not.found");
            result.put("status", HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        }
        
        String useYn = authResult.get("useYn");
        if("N".equals(useYn)) {
        	result.put("message", "failed.not.authenticated");
            result.put("status", HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        }
        
        String token = authResult.get("jwt");
        String loginType = authResult.get("loginType");

        if (token != null && !"".equals(token)) {
            response.setHeader("Authorization", "Bearer " + token);
            Authentication auth = jwtHelper.getAuthentication(token);
            result.put("message", "Successfully Login");
            result.put("status", "success");
            result.put("token", token);
            result.put("roles", auth.getAuthorities());
            if("tempPass".equals(loginType)) {
                result.put("loginType", "tempPass");
            }
            result.put("authorCd", authResult.get("authorCd"));
            result.put("amdinSeq", authResult.get("seq"));
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        } else {
        	result.put("message", "failed.not.match");
            result.put("status", HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        }
    }

    @GetMapping(path = "/api/home")
    public ResponseEntity<Object> home(Authentication authentication, HttpServletRequest request) throws CustomResponseException {
        logger.debug("Authenticated user: '{}'");
        Map<String, Object> result = new HashMap<String, Object>();
        return new ResponseEntity<Object>(result, HttpStatus.OK);

    }

    @PostMapping(value = "/api/forget/password")
    public ResponseEntity<Object> forgetPassword(@RequestBody SendTempPasswordForm tempPasswordForm) throws CustomResponseException, NotFoundException {
        Map<String, Object> result = new HashMap<String, Object>();

        String email = tempPasswordForm.getEmail();

        Admin admin = adminService.getByEmail(email);
        if (admin == null) {
            result.put("status", "error");
            result.put("message", "failed.user.not.found");
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        }

        if ("Y".equals(admin.getIsDeleted())) {
            result.put("status", "error");
            result.put("message", "failed.user.deleted");
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        }

        String tempPass = adminService.generateTempPwd(email);
        if (StringUtils.isBlank(tempPass)) {
            result.put("status", "error");
            result.put("message", "failed.user.not.found");
            return new ResponseEntity<Object>(result, HttpStatus.OK);
        }

        try {
			emailService.sendAdminTempPassword(email, tempPass);
			result.put("status", "success");
			result.put("message", "message.success.temppass");
        } catch (Exception e) {
            throw new CustomResponseException("failed.user.not.found", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/change/password")
    public ResponseEntity<Object> changePassword(AdminChangePasswordForm changePasswordForm, Authentication authentication) throws CustomResponseException {
        Map<String, Object> result = new HashMap<String, Object>();

        try {
            Admin admin = new Admin();
            admin.setPassword(changePasswordForm.getPassword());
            //String username = UserDetailsHelper.findLoggedInUsername(authentication);
            admin.setUsername(changePasswordForm.getUsername());

            adminService.changePassword(admin);

            result.put("status", "success");
            result.put("message", "message.success.changed.password");
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("failed.change.password", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

}
