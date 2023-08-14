package kr.co.tagoplus.admin.project.controller;

import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.notification.entity.Email;
import kr.co.tagoplus.notification.service.EmailService;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.entity.ProjectItem;
import kr.co.tagoplus.project.entity.ProjectPayment;
import kr.co.tagoplus.project.service.ProjectItemService;
import kr.co.tagoplus.project.service.ProjectPaymentService;
import kr.co.tagoplus.project.service.ProjectService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.AttachFileList;
import kr.co.tagoplus.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@RestController
public class ProjectRestController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectItemService projectItemService;

    @Autowired
    private ProjectPaymentService projectPaymentService;
    @Autowired
    private EmailService emailService;

    @Autowired
    private FileService fileService;

    @GetMapping(value = "/api/projects")
    public ResponseEntity<Object> getProjectList(@RequestParam Map<String, Object> params, Pageable pageable) {
        Page<Project> projects = projectService.getPagedByFilter(params, pageable);

        return ResponseEntityUtil.list(projects);
    }

    @GetMapping(value = "/api/project/{seq:\\d+}")
    public ResponseEntity<Object> getProjectDetail(@PathVariable Long seq) {
        Project project = projectService.getById(seq);

        if (project != null) {
            if(project.getSourceFileGroupSeq() != null){
                project.setSourceFile(fileService.getByGroupId(project.getSourceFileGroupSeq()));
            }
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.empty();
    }

    @PostMapping(value = "/api/project/create")
    public ResponseEntity<Object> createProject(Project project, AttachFileList attachFileList, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        long fileGroupSeq;
        if(attachFileList.getFiles() != null) {
            fileGroupSeq = fileService.generateFileGroup();
            fileService.storeFile(attachFileList.getFiles(), "Project", fileGroupSeq);
            project.setFileGroupSeq(fileGroupSeq);
        }

        project.setStatusCd("R");
        int affactedRows = projectService.register(project);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.error("error.insert");
    }

    @PostMapping(value = "/api/project/update")
    public ResponseEntity<Object> updateProject(Project project, AttachFileList attachFileList, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        if(attachFileList.getFiles() != null) {
            if (project.getFileGroupSeq() == null || project.getFileGroupSeq() == 0) {
                project.setFileGroupSeq(fileService.generateFileGroup());
            }
            else {
                fileService.deleteByFileGroup(project.getFileGroupSeq());
            }
            fileService.storeFile(attachFileList.getFiles(), "Project", project.getFileGroupSeq());
        }

        int affactedRows = projectService.update(project);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.error("error.update");
    }

    @PostMapping(value = "/api/project/detail/update")
    public ResponseEntity<Object> updateDetailProject(Project project, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        projectService.deleteManager(project);

        if(project.getAdminSeq() != null){
            String managerSeqArr[] = project.getAdminSeq().split(",");
            for(String managerSeq: managerSeqArr){
                Project tempProject = new Project();
                tempProject.setSeq(project.getSeq());
                tempProject.setAdminSeq(managerSeq);

                projectService.insertManager(tempProject);
            }
        }

        projectPaymentService.deleteByProjectSeq(project.getSeq());

        if(project.getProjectPayments() != null){
            List<ProjectPayment> payments = project.getProjectPayments();
            for(ProjectPayment item : payments){
                item.setProjectSeq(project.getSeq());
                projectPaymentService.insert(item);
            }

            String paymentType = projectPaymentService.getProjectPaymentType(payments);
            project.setPaymentType(paymentType);
        }


        int affactedRows = projectService.updateDetail(project);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.error("error.update");
    }

    @PostMapping(value = "/api/project/detail/date/update")
    public ResponseEntity<Object> updateDetailDateProject(Project project, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        int affactedRows = projectService.updateDetail(project);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.error("error.update");
    }

    @PostMapping(value = "/api/project/source/update")
    public ResponseEntity<Object> updateProjectSource(Project project, AttachFileList attachFileList, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        long fileGroupSeq;
        if(attachFileList.getFiles() != null) {
            fileGroupSeq = fileService.generateFileGroup();
            fileService.storeFile(attachFileList.getFiles(), "Project source", fileGroupSeq);
            project.setSourceFileGroupSeq(fileGroupSeq);
        }

        int affactedRows = projectService.updateSource(project);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(project);
        }

        return ResponseEntityUtil.error("error.update");
    }


    @PostMapping(value = "/api/project/mail/send")
    public ResponseEntity<Object> postMailSend() {
    /*    if (binding.hasErrors()) {
            throw new BindException(binding);
        }*/

        Map<String, Object> params = new HashMap<>();
        params.put("mailBody", "This is mail body");

         emailService.sendWithTemplate(new Email("a.tuya54@gmail.com", "MonoPub - Project", "mail/mail_html_tmpl", params));

   /*     if(emailSendCount){
            return ResponseEntityUtil.success(null);
        }
*/
        return ResponseEntityUtil.error("error.failed");
    }

    @GetMapping(value = "/api/project/file/password")
    public ResponseEntity<Object> generateFilePass() {
        String upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerChars = "abcdefghijklmnopqrstuvwxyz";
        String numberChars = "0123456789";

        String allChars = upperChars + lowerChars + numberChars;
        Random random = new Random();

        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(allChars.length());
            password.append(allChars.charAt(index));
        }

        if(password.length() > 0){
            return ResponseEntityUtil.success(password.toString());
        }

        return ResponseEntityUtil.empty();
    }

}
