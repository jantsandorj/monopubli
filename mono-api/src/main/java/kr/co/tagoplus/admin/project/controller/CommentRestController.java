package kr.co.tagoplus.admin.project.controller;

import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFileList;
import kr.co.tagoplus.file.service.FileService;
import kr.co.tagoplus.project.entity.Comment;
import kr.co.tagoplus.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentRestController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private FileService fileService;

    @PostMapping(value = "/api/project/comment/create")
    public ResponseEntity<Object> createComment(Comment comment, AttachFileList attachFileList, Authentication authentication, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        long fileGroupSeq;
        if(attachFileList.getFiles() != null) {
            fileGroupSeq = fileService.generateFileGroup();
            fileService.storeFile(attachFileList.getFiles(), "Project comment", fileGroupSeq);
            comment.setFileGroupSeq(fileGroupSeq);
        }

        comment.setCreatedBy(UserDetailsHelper.findLoggedInSeq(authentication));
        comment.setCreatedUsername(authentication.getName());
        int affactedRows = commentService.register(comment);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(comment);
        }

        return ResponseEntityUtil.error("error.insert");
    }

    @PostMapping(value = "/api/project/comment/update")
    public ResponseEntity<Object> updateComment(Comment comment, Authentication authentication, AttachFileList attachFileList, BindingResult binding) throws BindException {
        if (binding.hasErrors()) {
            throw new BindException(binding);
        }

        if(attachFileList.getFiles() != null) {
            if (comment.getFileGroupSeq() == null || comment.getFileGroupSeq() == 0) {
                comment.setFileGroupSeq(fileService.generateFileGroup());
            }
            else {
                fileService.deleteByFileGroup(comment.getFileGroupSeq());
            }
            fileService.storeFile(attachFileList.getFiles(), "Project comment", comment.getFileGroupSeq());
        }

        comment.setModifiedBy(UserDetailsHelper.findLoggedInSeq(authentication));
        comment.setCreatedUsername(authentication.getName());
        int affactedRows = commentService.update(comment);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(comment);
        }

        return ResponseEntityUtil.error("error.insert");
    }

    @PostMapping(value = "/api/project/comment/delete/{seq}")
    public ResponseEntity<Object> deleteComment(@PathVariable Long seq) {

        int affactedRows = commentService.deleteById(seq);

        if (affactedRows > 0) {
            return ResponseEntityUtil.success(null);
        }

        return ResponseEntityUtil.error("error.delete");
    }


}
