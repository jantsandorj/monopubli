package kr.co.tagoplus.community.entity;

import java.util.ArrayList;
import java.util.List;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class Notice extends GeneralVO {
	private static final long serialVersionUID = 7226959686778949870L;

	private int seq;

    private String title;

    private String divisionYn;

    private String content;

    private long fileGroupSeq;

    private String reservationDate;

    private String exposureYn;
    
    private int viewCnt;
    
    private String  startDate;
    
    private List<FileDetail> attachments = new ArrayList<FileDetail>();

    public int getNum() {return num;}

    public void setNum(int num) {this.num = num;}

    private int num;

    private String fullname;

    public int getSeq() {
        return seq;
    }
    public void setSeq(int seq) {
        this.seq = seq;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDivisionYn() {
        return divisionYn;
    }
    public void setDivisionYn(String divisionYn) {
        this.divisionYn = divisionYn;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public long getFileGroupSeq() {
        return fileGroupSeq;
    }
    public void setFileGroupSeq(long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }
    public String getReservationDate() {
        return reservationDate;
    }
    public void setReservationDate(String reservationDate) {
        this.reservationDate = reservationDate;
    }
    public String getExposureYn() {
        return exposureYn;
    }
    public void setExposureYn(String exposureYn) {
        this.exposureYn = exposureYn;
    }
	public List<FileDetail> getAttachments() {
		return attachments;
	}
	public void setAttachments(List<FileDetail> attachments) {
		this.attachments = attachments;
	}
	public int getViewCnt() {
		return viewCnt;
	}
	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}
