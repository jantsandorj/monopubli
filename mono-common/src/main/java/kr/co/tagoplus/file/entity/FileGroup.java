package kr.co.tagoplus.file.entity;

import java.util.ArrayList;
import java.util.List;

import kr.co.tagoplus.common.util.DateUtil;

public class FileGroup {

	private long fileGrpId;
	private String createDt;
	
	private List<FileDetail> files = new ArrayList<FileDetail>();

	public FileGroup() {
		this.createDt = DateUtil.getTimestampAsCompact();
	}

	public long getFileGrpId() {
		return fileGrpId;
	}

	public String getCreateDt() {
		return createDt;
	}

	public void setFileGrpId(long fileGrpId) {
		this.fileGrpId = fileGrpId;
	}

	public void setCreateDt(String createDt) {
		this.createDt = createDt;
	}

	public List<FileDetail> getFiles() {
		return files;
	}

	public void setFiles(List<FileDetail> files) {
		this.files = files;
	}

	@Override
	public String toString() {
		return "FileGroup [fileGrpId=" + fileGrpId + ", createDt=" + createDt + ", files=" + files + "]";
	}
}