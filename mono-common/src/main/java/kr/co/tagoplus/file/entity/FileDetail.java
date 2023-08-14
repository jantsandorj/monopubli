package kr.co.tagoplus.file.entity;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class FileDetail implements Serializable {	
	@JsonIgnore
	private static final long serialVersionUID = -7136686720922544585L;

	private long fileSeq;
	private long fileGrpId;
	private int subSeq;
	
	private String fileNm;
	private String storedNm;
	private String fileExt;
	private long fileSize;	
	private int downCnt;
	private String createDt;
	
	private String url;
	private String storedPath;
	private String downloadUrl;
	private String deleteUrl;
	private String isDeleted = "N";
	
	public long getFileSeq() {
		return fileSeq;
	}
	public long getFileGrpId() {
		return fileGrpId;
	}
	public int getSubSeq() {
		return subSeq;
	}
	public String getFileNm() {
		return fileNm;
	}
	public String getStoredNm() {
		return storedNm;
	}
	public String getFileExt() {
		return fileExt;
	}
	public long getFileSize() {
		return fileSize;
	}
	public int getDownCnt() {
		return downCnt;
	}
	public String getCreateDt() {
		return createDt;
	}
	public String getStoredPath() {
		return storedPath;
	}
	public String getDownloadUrl() {
		return downloadUrl;
	}
	public String getDeleteUrl() {
		return deleteUrl;
	}
	public void setFileSeq(long fileSeq) {
		this.fileSeq = fileSeq;
	}
	public void setFileGrpId(long fileGrpId) {
		this.fileGrpId = fileGrpId;
	}
	public void setSubSeq(int subSeq) {
		this.subSeq = subSeq;
	}
	public void setFileNm(String fileNm) {
		this.fileNm = fileNm;
	}
	public void setStoredNm(String storedNm) {
		this.storedNm = storedNm;
	}
	public void setFileExt(String fileExt) {
		this.fileExt = fileExt;
	}
	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	public void setDownCnt(int downCnt) {
		this.downCnt = downCnt;
	}
	public void setCreateDt(String createDt) {
		this.createDt = createDt;
	}
	public void setStoredPath(String storedPath) {
		this.storedPath = storedPath;
	}
	public void setDownloadUrl(String downloadUrl) {
		this.downloadUrl = downloadUrl;
	}
	public void setDeleteUrl(String deleteUrl) {
		this.deleteUrl = deleteUrl;
	}

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	@Override
	public String toString() {
		return "FileDetail [fileSeq=" + fileSeq + ", fileGrpId=" + fileGrpId + ", subSeq=" + subSeq + ", fileNm=" + fileNm
				+ ", storedNm=" + storedNm + ", fileExt=" + fileExt + ", fileSize=" + fileSize + ", downCnt=" + downCnt
				+ ", createDt=" + createDt + ", url=" + url + ", path=" + storedPath + ", downloadUrl=" + downloadUrl
				+ ", deleteUrl=" + deleteUrl + "]";
	}
}