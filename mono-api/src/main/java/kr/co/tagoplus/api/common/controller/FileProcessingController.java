package kr.co.tagoplus.api.common.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import kr.co.tagoplus.common.component.CustomResponseException;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.file.entity.FileDetail;
import kr.co.tagoplus.file.entity.FileForm;
import kr.co.tagoplus.file.service.FileService;

/**
 * @author Tim
 * desc FileProcessingController is used for upload, download
 */
@RestController
public class FileProcessingController {
	
	private static final Logger logger = LoggerFactory.getLogger(FileProcessingController.class);

    @Autowired
    private FileService fileService;
    
    @PostMapping("/files/upload")
    public Object uploadFile(FileForm fileForm) throws Exception {
    	FileDetail fileDetail = fileService.storeFile(fileForm);

	    return fileDetail;
    }
    
    @PostMapping("/files/upload/summernote")
    public ResponseEntity<Object> remoteUploadFile(FileForm fileForm, @RequestParam("container") String source) throws Exception {
        fileForm.setMemo(source);
    	FileDetail fileDetail = fileService.storeFile(fileForm);
        
        if(fileDetail == null) {
        	throw new CustomResponseException("error.file.upload", HttpStatus.BAD_REQUEST);
        }
        
        Map<String, Object> result = new HashMap<String, Object>();
    	result.put("url", fileDetail.getUrl());
    	result.put("filename", fileDetail.getFileNm());
    	result.put("fileid", fileDetail.getFileSeq());
    	
	    return new ResponseEntity<Object>(result, HttpStatus.OK);
    }
    
    @GetMapping("/files/download/zip/{subDirectory}/{fileName:.+}")
    public ResponseEntity<Resource> downloadZip(
    		@PathVariable String subDirectory, 
    		@PathVariable String fileName, 
    		HttpServletRequest request) {
        // Load file as Resource
        Resource resource = fileService.loadFileAsResource(subDirectory + "/" + fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @GetMapping("/files/download/{modulePath:(?!zip).+}/**")
    public ResponseEntity<Resource> downloadFile(
    		@PathVariable String modulePath,
    		HttpServletRequest request) {
        // Load file as Resource
    	String requestUrl = request.getRequestURI();
        FileDetail file = fileService.getByUrl(requestUrl);
        
        Resource resource = null;
        String filename = "";
        
        if(file != null) {
        	resource = fileService.loadFileAsResource(file.getStoredPath());
        	
        	if(resource != null && resource.exists()) {
        		filename = resource.getFilename();
        		
        		try {
        			if(!StringUtils.isBlank(file.getFileNm())) {
    	        		filename = URLEncoder.encode(file.getFileNm(), "UTF-8");
    	        	}
            	} catch (Exception e) {
        			e.printStackTrace();
        			filename = resource.getFilename();
        		}
    		}
    	}        
        
     // Try to determine file's content type
        String contentType = "application/octet-stream";
        try {
        	if(resource != null && resource.exists()) {
        		contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        	}
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
            contentType = "application/octet-stream";
        }

        // Fallback to the default content type if type could not be determined
        String dispositionType = "attachment";
        if(contentType.contains("video")) {
        	dispositionType = "inline";
        }
        
        StringBuilder contentDisposition = new StringBuilder();
        contentDisposition.append(dispositionType);
        contentDisposition.append("; filename=\"");
        contentDisposition.append(filename);
        contentDisposition.append("\"; filename*=UTF-8''");
        contentDisposition.append(filename);
        
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition.toString())
                .body(resource);
    }
    
    @GetMapping("/files/download/{fileId:\\d+}")
    public ResponseEntity<Resource> downloadFileById(@PathVariable long fileId, HttpServletRequest request) throws CustomResponseException {
    	FileDetail file = fileService.getById(fileId);
		
		if(file == null) {
			throw new CustomResponseException("file not found with id: " + fileId, HttpStatus.NOT_FOUND);
		}
        Resource resource = fileService.loadFileAsResource(file.getStoredPath());
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        String filename = "";
        try {
			filename = URLEncoder.encode(file.getFileNm(), "UTF-8");
		} catch (UnsupportedEncodingException e) {
            e.printStackTrace();
			filename = file.getFileNm();
		}
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + filename)
                .body(resource);
    }
    
    @PostMapping("/api/files/{seq}/delete")
    public ResponseEntity<Object> deleteFiles(@PathVariable Long seq) {

		boolean ret = fileService.deleteFile(seq);

		if (ret)
			return ResponseEntityUtil.success(null);

		return ResponseEntityUtil.error("error.file.delete");
	}
}