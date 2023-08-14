package kr.co.tagoplus.project.entity;

import kr.co.tagoplus.auth.entity.Admin;
import kr.co.tagoplus.auth.entity.User;
import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.List;

public class Project extends GeneralVO {

    private static final long serialVersionUID = -268823613027501346L;
    private Long seq;
    private Long userSeq;
    private String name;
    private String figmaAddr;
    private String userMemo;
    private String vatTypeCd;
    private String userEstimatedEndDate;
    private String statusCd;
    private String adminEstimatedEndDate;

    private String adminMemo;
    private String filePassword;
    private int process;
    private Long  fileGroupSeq;
    private Long  sourceFileGroupSeq;
    private String situation;
    private String hasMiddlePayment;
    private String paymentType;

    @Transient
    public List<FileDetail> attachments = new ArrayList<>();
    @Transient
    public List<FileDetail> sourceFile = new ArrayList<>();

    private String companyName;
    private String username;
    private String fullname;
    private String memberTypeCd;
    private String phone;
    private String email;
    private String vatPrice;
    private String vatNotPrice;
    private String adminSeq;
    private List<Admin> managerList = new ArrayList<>();
    private List<Admin> workerList = new ArrayList<>();
    private List<Comment> comments = new ArrayList<>();
    private List<ProjectItem> projectItemList = new ArrayList<>();
    private String actualStartDate;
    private String actualEndDate;

    private int managerItemTotal;
    private int managerItemDone;
    private int workerItemTotal;
    private int workerItemDone;
    private int totalNum;

    private User user;
    private List<ProjectPayment> projectPayments;


    public String getHasMiddlePayment() {
        return hasMiddlePayment;
    }

    public void setHasMiddlePayment(String hasMiddlePayment) {
        this.hasMiddlePayment = hasMiddlePayment;
    }

    public List<ProjectItem> getProjectItemList() {
        return projectItemList;
    }

    public void setProjectItemList(List<ProjectItem> projectItemList) {
        this.projectItemList = projectItemList;
    }

    public List<ProjectPayment> getProjectPayments() {
        return projectPayments;
    }

    public void setProjectPayments(List<ProjectPayment> projectPayments) {
        this.projectPayments = projectPayments;
    }

    public Long getSourceFileGroupSeq() {
        return sourceFileGroupSeq;
    }

    public void setSourceFileGroupSeq(Long sourceFileGroupSeq) {
        this.sourceFileGroupSeq = sourceFileGroupSeq;
    }

    public List<Admin> getWorkerList() {
        return workerList;
    }

    public void setWorkerList(List<Admin> workerList) {
        this.workerList = workerList;
    }

    public int getManagerItemTotal() {
        return managerItemTotal;
    }

    public void setManagerItemTotal(int managerItemTotal) {
        this.managerItemTotal = managerItemTotal;
    }

    public int getManagerItemDone() {
        return managerItemDone;
    }

    public void setManagerItemDone(int managerItemDone) {
        this.managerItemDone = managerItemDone;
    }

    public int getWorkerItemTotal() {
        return workerItemTotal;
    }

    public void setWorkerItemTotal(int workerItemTotal) {
        this.workerItemTotal = workerItemTotal;
    }

    public int getWorkerItemDone() {
        return workerItemDone;
    }

    public void setWorkerItemDone(int workerItemDone) {
        this.workerItemDone = workerItemDone;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getSeq() {
        return seq;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }

    public Long getUserSeq() {
        return userSeq;
    }

    public void setUserSeq(Long userSeq) {
        this.userSeq = userSeq;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFigmaAddr() {
        return figmaAddr;
    }

    public void setFigmaAddr(String figmaAddr) {
        this.figmaAddr = figmaAddr;
    }

    public String getUserMemo() {
        return userMemo;
    }

    public void setUserMemo(String userMemo) {
        this.userMemo = userMemo;
    }

    public String getVatTypeCd() {
        return vatTypeCd;
    }

    public void setVatTypeCd(String vatTypeCd) {
        this.vatTypeCd = vatTypeCd;
    }

    public String getUserEstimatedEndDate() {
        return userEstimatedEndDate;
    }

    public void setUserEstimatedEndDate(String userEstimatedEndDate) {
        this.userEstimatedEndDate = userEstimatedEndDate;
    }

    public String getStatusCd() {
        return statusCd;
    }

    public void setStatusCd(String statusCd) {
        this.statusCd = statusCd;
    }

    public String getAdminEstimatedEndDate() {
        return adminEstimatedEndDate;
    }

    public void setAdminEstimatedEndDate(String adminEstimatedEndDate) {
        this.adminEstimatedEndDate = adminEstimatedEndDate;
    }

    public String getAdminMemo() {
        return adminMemo;
    }

    public void setAdminMemo(String adminMemo) {
        this.adminMemo = adminMemo;
    }

    public String getFilePassword() {
        return filePassword;
    }

    public void setFilePassword(String filePassword) {
        this.filePassword = filePassword;
    }

    public int getProcess() {
        return process;
    }

    public void setProcess(int process) {
        this.process = process;
    }

    public Long getFileGroupSeq() {
        return fileGroupSeq;
    }

    public void setFileGroupSeq(long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }

    public void setFileGroupSeq(Long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

    public List<FileDetail> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<FileDetail> attachments) {
        this.attachments = attachments;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getVatPrice() {
        return vatPrice;
    }

    public void setVatPrice(String vatPrice) {
        this.vatPrice = vatPrice;
    }

    public String getVatNotPrice() {
        return vatNotPrice;
    }

    public void setVatNotPrice(String vatNotPrice) {
        this.vatNotPrice = vatNotPrice;
    }

    public String getAdminSeq() {
        return adminSeq;
    }

    public void setAdminSeq(String adminSeq) {
        this.adminSeq = adminSeq;
    }

    public List<Admin> getManagerList() {
        return managerList;
    }

    public void setManagerList(List<Admin> managerList) {
        this.managerList = managerList;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public String getActualStartDate() {
        return actualStartDate;
    }

    public void setActualStartDate(String actualStartDate) {
        this.actualStartDate = actualStartDate;
    }

    public String getActualEndDate() {
        return actualEndDate;
    }

    public void setActualEndDate(String actualEndDate) {
        this.actualEndDate = actualEndDate;
    }

    public List<FileDetail> getSourceFile() {
        return sourceFile;
    }

    public void setSourceFile(List<FileDetail> sourceFile) {
        this.sourceFile = sourceFile;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public int getTotalNum() {
        return totalNum;
    }

    public void setTotal_num(int totalNum) {
        this.totalNum = totalNum;
    }

    public String getMemberTypeCd() {
        return memberTypeCd;
    }

    public void setMemberTypeCd(String memberTypeCd) {
        this.memberTypeCd = memberTypeCd;
    }

    @Override
    public String toString() {
        return "Project [seq=" + seq + ", userSeq=" + userSeq + ", name=" + name;
    }
}
