package kr.co.tagoplus.community.entity;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

import java.util.ArrayList;
import java.util.List;

public class FreeBoard extends GeneralVO {
    private static final long serialVersionUID = -7323841491287115281L;

    private int seq;

    private String title;

    private String divisionCd;

    private String content;

    private long fileGroupSeq;

    private int viewCnt;

    private String fullname;

    private List<FileDetail> attachments = new ArrayList<FileDetail>();

    public int getNum() {return num;}

    public void setNum(int num) {this.num = num;}

    private int num;

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
    public String getDivisionCd() {
        return divisionCd;
    }
    public void setDivisionCd(String divisionCd) {
        this.divisionCd = divisionCd;
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

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}
