package kr.co.tagoplus.admin.community.controller;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.helper.RequestProcessingHelper;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.AttachFileList;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.FreeBoard;
import kr.co.tagoplus.community.service.FreeBoardService;
import kr.co.tagoplus.file.service.FileService;
import org.apache.commons.collections4.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
public class AdminFreeBoardRestController {
    private static Logger logger = LoggerFactory.getLogger(AdminFreeBoardRestController.class);

    @Autowired
    private FreeBoardService freeBoardService;

    @Autowired
    private FileService fileService;

    @GetMapping(value = "/api/free/board/list")
    public ResponseEntity<Object> getFreeBoardList(@RequestParam Map<String, Object> params, Pageable pageable, Authentication authentication) throws CustomResponseException {

        Page<FreeBoard> freeBoards = freeBoardService.getPagedByFilter(params, pageable);

        return new ResponseEntity<Object>(freeBoards, HttpStatus.OK);
    }

    @GetMapping(value = "/api/free/board/detail/{seq}")
    public ResponseEntity<Object> getFreeBoardDetail(@PathVariable int seq, Authentication authentication) throws CustomResponseException {

        FreeBoard freeBoard = null;

        try {
            freeBoard = freeBoardService.getBySeq(seq);
            freeBoardService.updateViewCount(seq);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("data", freeBoard);
        result.put("status", "success");
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/free/board/create")
    public ResponseEntity<Object> createFreeBoard(AttachFileList attachments, FreeBoard freeBoard, Authentication authentication, HttpServletRequest request) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int insertCount = 0;

        try {
            if(attachments.getFiles() != null) {
                long fileGroupSeq = fileService.generateFileGroup();
                freeBoard.setFileGroupSeq(fileGroupSeq);
                fileService.storeFile(attachments.getFiles(), "FreeBoard", fileGroupSeq);
            }

            freeBoard.setCreatedBy(UserDetailsHelper.findLoggedInSeq(authentication));
            freeBoard.setCreatedIp(RequestProcessingHelper.getClientIP(request));
            freeBoard.setCreatedDate(DateUtil.getTimestampAsCompact());

            insertCount = freeBoardService.insert(freeBoard);

            if (insertCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @PostMapping(value = "/api/free/board/update")
    public ResponseEntity<Object> updateFreeBoard(AttachFileList attachments, FreeBoard freeBoard, Authentication authentication, HttpServletRequest request) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int updateCount = 0;

        try {
            if(attachments.getFiles() != null) {
                if(Long.valueOf(freeBoard.getFileGroupSeq()) == null || freeBoard.getFileGroupSeq() == 0)
                    freeBoard.setFileGroupSeq(fileService.generateFileGroup());
                else
                    fileService.deleteByFileGroup(freeBoard.getFileGroupSeq());
                fileService.storeFile(attachments.getFiles(), "FreeBoard", freeBoard.getFileGroupSeq());
            }

            freeBoard.setModifiedBy(UserDetailsHelper.findLoggedInSeq(authentication));
            freeBoard.setModifiedIp(RequestProcessingHelper.getClientIP(request));

            updateCount = freeBoardService.update(freeBoard);

            if (updateCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/free/board/delete/{seq}")
    public ResponseEntity<Object> deleteFreeBoard(@PathVariable int seq, Authentication authentication) throws CustomResponseException {
        if (!UserDetailsHelper.isAuthenticated(authentication)) {
            throw new CustomResponseException("error.access.denied");
        }

        Map<String, Object> result = new HashedMap<String, Object>();
        result.put("status", "error");
        int deleteCount = 0;

        try {
            deleteCount = freeBoardService.deleteById(seq);

            if (deleteCount > 0) {
                result.put("status", "success");
                result.put("message", "message.success.delete");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new CustomResponseException("error.failed", e);
        }

        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

}
