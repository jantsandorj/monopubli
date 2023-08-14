package kr.co.tagoplus.community.entity;

import java.util.ArrayList;
import java.util.List;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class Faq extends GeneralVO {
	private static final long serialVersionUID = 3367569155808910352L;

	private int seq;

    private String question;

    private String answer;

    private String categoryCd;

    private String exposureYn;

    private long fileGroupSeq;

    private int viewCnt;
    
    private List<FileDetail> attachments = new ArrayList<FileDetail>();

    public int getSeq() {
        return seq;
    }
    public void setSeq(int seq) {
        this.seq = seq;
    }
    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }
    public String getAnswer() {
        return answer;
    }
    public void setAnswer(String answer) {
        this.answer = answer;
    }
    public String getCategoryCd() {
        return categoryCd;
    }
    public void setCategoryCd(String categoryCd) {
        this.categoryCd = categoryCd;
    }
    public String getExposureYn() {
        return exposureYn;
    }
    public void setExposureYn(String exposureYn) {
        this.exposureYn = exposureYn;
    }
    public long getFileGroupSeq() {
        return fileGroupSeq;
    }
    public void setFileGroupSeq(long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }
    public int getViewCnt() {
        return viewCnt;
    }
    public void setViewCnt(int viewCnt) {
        this.viewCnt = viewCnt;
    }
	public List<FileDetail> getAttachments() {
		return attachments;
	}
	public void setAttachments(List<FileDetail> attachments) {
		this.attachments = attachments;
	}
}
