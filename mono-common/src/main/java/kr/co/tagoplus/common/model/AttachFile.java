package kr.co.tagoplus.common.model;

import org.springframework.web.multipart.MultipartFile;

public class AttachFile {

	public MultipartFile file;

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

}