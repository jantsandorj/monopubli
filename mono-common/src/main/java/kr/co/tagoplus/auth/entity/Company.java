package kr.co.tagoplus.auth.entity;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

import java.util.ArrayList;
import java.util.List;

public class Company extends GeneralVO {

    private static final long serialVersionUID = -5508285281644573261L;
    private Long seq;
    private Long userSeq;
    private String name;
    private String ceoName;
    private String personInCharge;
    private String registerNumber;
    private String companyPhone;
    private String companyEmail;
    private long  fileGroupSeq;

    private List<FileDetail> imageAtch = new ArrayList<FileDetail>();

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

    public String getCeoName() {
        return ceoName;
    }

    public void setCeoName(String ceoName) {
        this.ceoName = ceoName;
    }

    public String getPersonInCharge() {
        return personInCharge;
    }

    public void setPersonInCharge(String personInCharge) {
        this.personInCharge = personInCharge;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }

    public String getCompanyPhone() {
        return companyPhone;
    }

    public void setCompanyPhone(String companyPhone) {
        this.companyPhone = companyPhone;
    }

    public String getCompanyEmail() {
        return companyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        this.companyEmail = companyEmail;
    }

    public long getFileGroupSeq() {
        return fileGroupSeq;
    }

    public void setFileGroupSeq(long fileGroupSeq) {
        this.fileGroupSeq = fileGroupSeq;
    }

    public List<FileDetail> getImageAtch() {
        return imageAtch;
    }

    public void setImageAtch(List<FileDetail> imageAtch) {
        this.imageAtch = imageAtch;
    }


}
