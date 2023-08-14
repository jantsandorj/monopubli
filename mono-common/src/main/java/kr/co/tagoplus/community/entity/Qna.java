package kr.co.tagoplus.community.entity;

import java.util.List;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

public class Qna extends GeneralVO {
	private static final long serialVersionUID = 2860470861719916205L;

	private int seq;

    private String username;

    private String title;

    private String content;

    private String answer;

    private String answerUsername;

    private String isSecret;

    private String isAnswered;

    private long viewCount;

    private long fileGroupSeq;

    private long answerFileGroupSeq;

    private List<FileDetail> attach;
    
    private List<FileDetail> atchAnswer;

    public int getSeq() {
        return seq;
    }
    public void setSeq(int seq) {
        this.seq = seq;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public String getAnswer() {
        return answer;
    }
    public void setAnswer(String answer) {
        this.answer = answer;
    }
    public String getAnswerUsername() {
        return answerUsername;
    }
    public void setAnswerUsername(String answerUsername) {
        this.answerUsername = answerUsername;
    }
    public String getIsSecret() {
        return isSecret;
    }
    public void setIsSecret(String isSecret) {
        this.isSecret = isSecret;
    }
    public String getIsAnswered() {
        return isAnswered;
    }
    public void setIsAnswered(String isAnswered) {
        this.isAnswered = isAnswered;
    }
    public long getViewCount() {
        return viewCount;
    }
    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }
    public long getFileGroupSeq() {
        return fileGroupSeq;
    }
    public void setFileGroupSeq(long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }
    public long getAnswerFileGroupSeq() {
        return answerFileGroupSeq;
    }
    public void setAnswerFileGroupSeq(long answerFileGroupSeq) {
        this.answerFileGroupSeq = answerFileGroupSeq;
    }
	public List<FileDetail> getAttach() {
		return attach;
	}
	public void setAttach(List<FileDetail> attach) {
		this.attach = attach;
	}
	public List<FileDetail> getAtchAnswer() {
		return atchAnswer;
	}
	public void setAtchAnswer(List<FileDetail> atchAnswer) {
		this.atchAnswer = atchAnswer;
	}
}
