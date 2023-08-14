package kr.co.tagoplus.file.entity;

import org.springframework.web.multipart.MultipartFile;

public class FileForm {

	private MultipartFile file;
	private String memo = "doc";
	private String contentType = "";
	private String subDirectory = "";
	
	public FileForm() {
	}
	
	public FileForm(MultipartFile file) {
		this.file = file;
	}
	
	public FileForm(MultipartFile file, String subDirectory) {
		this.file = file;
		this.subDirectory = subDirectory;
	}

	public MultipartFile getFile() {
		return file;
	}
	public void setFile(MultipartFile file) {
		this.file = file;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getSubDirectory() {
		return subDirectory;
	}

	public void setSubDirectory(String subDirectory) {
		this.subDirectory = subDirectory;
	}
}
