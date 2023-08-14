package kr.co.tagoplus.admin.auth.controller;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class WorkerRestController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private FileService fileService;

    @GetMapping(value = "/api/workers")
    public ResponseEntity<Object> getWorkerList(@RequestParam Map<String, Object> params, Pageable pageable) {
        Page<Admin> admins = adminService.getPagedByFilter(params, pageable);

        return ResponseEntityUtil.list(admins);
    }

    @GetMapping(value = "/api/manager/list")
    public ResponseEntity<Object> getManagerListByPosition(@RequestParam Map<String, Object> params) {

        List<Admin> admins = adminService.getManagerListByPosition(params);
        return ResponseEntityUtil.success(admins);
    }

    @GetMapping(value = "/api/worker/list")
    public ResponseEntity<Object> getWorkerListByPosition(@RequestParam Map<String, Object> params) {

        List<Admin> admins = adminService.getWorkerListByPosition(params);
        return ResponseEntityUtil.success(admins);
    }

    @GetMapping(value = "/api/worker/{seq:\\d+}")
    public ResponseEntity<Object> getWorkerDetail(@PathVariable Long seq) {
        Admin admin = adminService.getById(seq);
        if (admin != null) {
            return ResponseEntityUtil.success(admin);
        }

        return ResponseEntityUtil.empty();
    }

    @PostMapping(value = "/api/worker/create")
    public ResponseEntity<Object> createWorker(AttachFile attachFile, Admin admin, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        if(adminService.existByUsername(admin.getUsername())) {
            return ResponseEntityUtil.error("error.duplicate.username");
        }

        if(adminService.existByEmail(admin.getEmail())) {
            return ResponseEntityUtil.error("error.duplicate.email");
        }

        long fileGroupSeq;
        if(attachFile.getFile() != null) {
            fileGroupSeq = fileService.generateFileGroup();
            fileService.fileStore(attachFile.getFile(), "Worker", fileGroupSeq);
            admin.setFileGroupSeq(fileGroupSeq);
        }

        admin.setAdminType("worker");
        int affactedRows = adminService.register(admin);

        if (affactedRows > 0) {
            if(admin.getSkill() != null){
                Admin adminSkill = new Admin();
                adminSkill.setSeq(admin.getSeq());

                String[] skillArr = admin.getSkill().split(",");
                for(String skill : skillArr){
                   adminSkill.setSkill(skill);
                   adminService.registerSkill(adminSkill);
                }
            }

            return ResponseEntityUtil.success(admin);
        }

        return ResponseEntityUtil.error("error.insert");
    }

    @PostMapping(value = "/api/worker/update")
    public ResponseEntity<Object> updateWorker(AttachFile attachFile, Admin admin, BindingResult binding) throws BindException {

        if (binding.hasErrors()) {
            throw new BindException(binding);
        }
        if(attachFile.getFile() != null) {
            if (admin.getFileGroupSeq() == null || admin.getFileGroupSeq() == 0) {
                admin.setFileGroupSeq(fileService.generateFileGroup());
            }
            else {
                fileService.deleteByFileGroup(admin.getFileGroupSeq());
            }
            fileService.fileStore(attachFile.getFile(), "Worker", admin.getFileGroupSeq());
        }

        adminService.deleteSkill(admin);
        if(admin.getSkill() != null){
            Admin adminSkill = new Admin();
            adminSkill.setSeq(admin.getSeq());

            String[] skillArr = admin.getSkill().split(",");
            for(String skill : skillArr){
                adminSkill.setSkill(skill);
                adminService.registerSkill(adminSkill);
            }
        }

        int affactedRows = adminService.update(admin);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(admin);
        }

        return ResponseEntityUtil.error("error.update");
    }

    @PostMapping(value = "/api/worker/delete/{seq}")
    public ResponseEntity<Object> deleteWorker(@PathVariable Long seq) {

        int affactedRows = adminService.deleteById(seq);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(null);
        }

        return ResponseEntityUtil.error("error.delete");
    }

    @PostMapping(value = "/api/worker/idExist/{email}")
    public ResponseEntity<Object> adminIdExist(@PathVariable String email) throws BindException {
        if(adminService.existByUsername(email) || adminService.existByEmail(email)) {
            return ResponseEntityUtil.error("error.duplicate.email");
        }

        return ResponseEntityUtil.success(null);
    }

}
