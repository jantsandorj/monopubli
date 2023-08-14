package kr.co.tagoplus.project.entity;

import kr.co.tagoplus.common.model.GeneralVO;

public class ProjectPayment extends GeneralVO {
    private static final long serialVersionUID = 5065370319464622517L;

    private Long seq;
    private Long projectSeq;
    private String paymentType;
    private String price;
    private String netPrice;
    private String description;
    private String estimatedDate = null;
    private String actualDate = null;
    private String paymentStatus;
    private String situation;

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

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getNetPrice() {
        return netPrice;
    }

    public void setNetPrice(String netPrice) {
        this.netPrice = netPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEstimatedDate() {
        return estimatedDate;
    }

    public void setEstimatedDate(String estimatedDate) {
        this.estimatedDate = estimatedDate;
    }

    public String getActualDate() {
        return actualDate;
    }

    public void setActualDate(String actualDate) {
        this.actualDate = actualDate;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }
}
