package kr.co.tagoplus.project.entity;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

import javax.persistence.Transient;
import java.util.List;

public class Comment extends GeneralVO {
    private static final long serialVersionUID = -5482775352267442579L;

    private Long seq;
    private Long projectSeq;
    private String text;
    private String createdUsername;
    private Long fileGroupSeq;

    @Transient
    public List<FileDetail> attachments;

    public Long getSeq() {
        return seq;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }

    public Long getProjectSeq() {
        return projectSeq;
    }

    public void setProjectSeq(Long projectSeq) {
        this.projectSeq = projectSeq;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getFileGroupSeq() {
        return fileGroupSeq;
    }

    public void setFileGroupSeq(Long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }

    public List<FileDetail> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<FileDetail> attachments) {
        this.attachments = attachments;
    }

    public String getCreatedUsername() {
        return createdUsername;
    }

    public void setCreatedUsername(String createdUsername) {
        this.createdUsername = createdUsername;
    }
}
