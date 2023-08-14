package kr.co.tagoplus.project.entity;

import kr.co.tagoplus.common.model.AttachFile;
import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;
import kr.co.tagoplus.settings.entity.Skill;

import java.util.ArrayList;
import java.util.List;

public class ProjectItem extends GeneralVO {

    private static final long serialVersionUID = 3217217910859315470L;
    private Long seq;
    private Long projectSeq;
    private String title;
    private String price;
    private Long  fileGroupSeq;
    private String skillSeq;
    private String totalPrice;
    private String description;
    private Long adminSeq;
    private String isCompletedManager;
    private String isCompletedWorker;
    private AttachFile attachFile;

    private String workerSeq;

    private List<FileDetail> imageAtch = new ArrayList<FileDetail>();
    private List<Skill> skillList =  new ArrayList<>();

    public List<Skill> getSkillList() {
        return skillList;
    }

    public void setSkillList(List<Skill> skillList) {
        this.skillList = skillList;
    }

    public String getWorkerSeq() {
        return workerSeq;
    }

    public void setWorkerSeq(String workerSeq) {
        this.workerSeq = workerSeq;
    }

    public String getIsCompletedWorker() {
        return isCompletedWorker;
    }

    public void setIsCompletedWorker(String isCompletedWorker) {
        this.isCompletedWorker = isCompletedWorker;
    }

    public Long getAdminSeq() {
        return adminSeq;
    }

    public void setAdminSeq(Long adminSeq) {
        this.adminSeq = adminSeq;
    }

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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Long getFileGroupSeq() {
        return fileGroupSeq;
    }

    public void setFileGroupSeq(Long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }

    public List<FileDetail> getImageAtch() {
        return imageAtch;
    }

    public void setImageAtch(List<FileDetail> imageAtch) {
        this.imageAtch = imageAtch;
    }

    public AttachFile getAttachFile() {
        return attachFile;
    }

    public String getSkillSeq() {
        return skillSeq;
    }

    public void setSkillSeq(String skillSeq) {
        this.skillSeq = skillSeq;
    }

    public void setAttachFile(AttachFile attachFile) {
        this.attachFile = attachFile;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIsCompletedManager() {
        return isCompletedManager;
    }

    public void setIsCompletedManager(String isCompletedManager) {
        this.isCompletedManager = isCompletedManager;
    }
}
