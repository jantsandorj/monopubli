package kr.co.tagoplus.admin.auth.controller;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.service.AdminService;
import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.file.entity.FileGroup;
import kr.co.tagoplus.file.service.FileService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AccountSettingsRestController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private FileService fileService;

    @PostMapping(value = "/api/admin/updateProfileinfo")
    public ResponseEntity<Object> doModifyAccountSettings(Admin admin, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        String pass = admin.getPassword();
        if (StringUtils.isBlank(pass)) {

            int affactedRows = adminService.update(admin);

            if (affactedRows > 0) {
                return ResponseEntityUtil.success(admin);
            }

            return ResponseEntityUtil.error("error.update");
        }else{
            adminService.changePassword(admin);
            return ResponseEntityUtil.success(null);
        }
    }

    @PostMapping(value = "/api/admin/updateProfileimg")
    public ResponseEntity<Object> doModifyProfileImg(AttachFile attachFile, Admin admin) throws BindException {

        if(attachFile.getFile() != null) {
            if (admin.getFileGroupSeq() == null || admin.getFileGroupSeq() == 0) {
                admin.setFileGroupSeq(fileService.generateFileGroup());
            }
            else {
                fileService.deleteByFileGroup(admin.getFileGroupSeq());
            }
            fileService.fileStore(attachFile.getFile(), "Admin", admin.getFileGroupSeq());
        }
        int affactedRows = adminService.update(admin);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(admin);
        }

        return ResponseEntityUtil.error("error.update");
    }
}
