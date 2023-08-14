package kr.co.tagoplus.common.model;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class AttachFileList {

	public List<MultipartFile> files;
	public List<MultipartFile> otherFiles;

	public List<MultipartFile> getFiles() {
		return files;
	}

	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}

	public List<MultipartFile> getOtherFiles() {
		return otherFiles;
	}

	public void setOtherFiles(List<MultipartFile> otherFiles) {
		this.otherFiles = otherFiles;
	}
}