package kr.co.tagoplus.admin.project.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.jwt.model.JwtUserDetails;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.serializer.ProjectPaymentManageSerializer;
import kr.co.tagoplus.project.service.ProjectPaymentManagementService;
import kr.co.tagoplus.project.service.ProjectPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ProjectPaymentRestController {

    @Autowired
    private ProjectPaymentManagementService projectPaymentManagementService;

    @Autowired
    private ProjectPaymentService projectPaymentService;

    @Autowired
    private AdminService adminService;

    @GetMapping(value = "/api/project/payment/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProjectPaymentManagementList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new SimpleModule().addSerializer(Project.class, new ProjectPaymentManageSerializer()));
            Page<Project> projects = projectPaymentManagementService.getPagedByFilter(params, pageable);

            return new ResponseEntity<Object>(mapper.writeValueAsString(projects), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntityUtil.empty();
    }

    @GetMapping(value = "/api/project/payment/tax/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProjectPaymentTaxList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        if("undefined".equals(params.get("startDate"))){
            params.put("startDate", "");
        }
        if("undefined".equals(params.get("endDate"))){
            params.put("endDate", "");
        }

        params.put("listType", "tax");
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new SimpleModule().addSerializer(Project.class, new ProjectPaymentManageSerializer()));
            Page<Project> projects = projectPaymentManagementService.getProjectPaymentTaxList(params, pageable);

            return new ResponseEntity<Object>(mapper.writeValueAsString(projects), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntityUtil.empty();
    }

    @GetMapping(value = "/api/project/payment/receivable/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProjectPaymentReceivableList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        if("undefined".equals(params.get("startDate"))){
            params.put("startDate", "");
        }
        if("undefined".equals(params.get("endDate"))){
            params.put("endDate", "");
        }

        params.put("listType", "receivable");
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new SimpleModule().addSerializer(Project.class, new ProjectPaymentManageSerializer()));
            Page<Project> projects = projectPaymentManagementService.getProjectPaymentTaxList(params, pageable);

            return new ResponseEntity<Object>(mapper.writeValueAsString(projects), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntityUtil.empty();
    }


    @GetMapping(value = "/api/project/payment/detail/{seq}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProjectPaymentManagementDetail(@PathVariable Long seq, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new SimpleModule().addSerializer(Project.class, new ProjectPaymentManageSerializer()));
            Project project = projectPaymentManagementService.getByProjectSeq(seq);

            return new ResponseEntity<Object>(mapper.writeValueAsString(ResponseEntityUtil.success(project).getBody()), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntityUtil.empty();
    }

    @GetMapping(value = "/api/project/payment/stats/tax", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProjectPaymentTaxStats(Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
        try {
            Map<String, Object> result = new HashMap<String, Object>();
            Map<String, Object> data = projectPaymentService.getPaymentTaxStats();
            result.put("message", "success");
            result.put("status", 200);
            result.put("content", data);

            return new ResponseEntity<Object>(result, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntityUtil.empty();
    }

    @GetMapping(value = "/api/project/payment/stats/receivable", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getProjectPaymentReceivableStats(Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
        try {
            Map<String, Object> result = new HashMap<String, Object>();
            Map<String, Object> data = projectPaymentService.getPaymentReceivableStats();
            result.put("message", "success");
            result.put("status", 200);
            result.put("content", data);

            return new ResponseEntity<Object>(result, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntityUtil.empty();
    }

    @PostMapping(path = "/api/project/payment/situation/update" )
    public ResponseEntity<Object> adminProjectSituationUpdate(Project project, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }
        Map<String, Object> result = new HashMap<String, Object>();

        JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();

        Admin admin = adminService.getByUsername(jwtUserDetails.getUsername());
        if(admin == null) {
            result.put("message", "Admin not authenticated");
            result.put("status", HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<Object>(result, HttpStatus.UNAUTHORIZED);
        }

        project.setModifiedBy(admin.getSeq());
        int affectedRows = projectPaymentService.updateProjectSituation(project);
        if (affectedRows > 0) {
            return ResponseEntityUtil.success(null);
        }

        return ResponseEntityUtil.error("admin.failed.update.project");
    }

}
