package kr.co.tagoplus.common.model;

import java.io.Serializable;

import javax.persistence.Transient;

import kr.co.tagoplus.common.util.DateUtil;
import lombok.Data;

@SuppressWarnings("serial")
@Data
public class GeneralVO implements Serializable {

	private String createdDate = DateUtil.getCurrentTimestamp();  //DateUtil.getTimestampAsCompact();  
	private Long createdBy;
	private String createdIp;
	private String modifiedDate = DateUtil.getCurrentTimestamp();  //DateUtil.getTimestampAsCompact();
	private String modifiedIp;
	private Long modifiedBy;
	private String isDeleted = "N";

	@Transient
	private String formattedCreateDate;
	
	@Transient
	private String formattedCreateTimestamp;
	
	@Transient
	private String formattedModifiedDate;
	
	@Transient
	private String formattedModifyTimestamp;

	@Transient
	private String searchCondition;

	@Transient
	private String searchKeyword;

	public String getFormattedCreateDate() {
		if(this.getCreatedDate() != null) {
			return DateUtil.changeDateFormat(this.getCreatedDate(), DateUtil.DB_TIMESTAMP, DateUtil.SIMPLE_DATE);
		}
		return "";
	}
	public String getFormattedCreateTimestamp() {
		if(this.getCreatedDate() != null) {
			return DateUtil.changeDateFormat(this.getCreatedDate(), DateUtil.COMPACT_TIMESTAMP, DateUtil.DB_TIMESTAMP);
		}
		return "";
	}
	public String getFormattedModifiedDate() {
		if(this.getModifiedDate() != null) {
			return DateUtil.changeDateFormat(this.getModifiedDate(), DateUtil.COMPACT_TIMESTAMP, DateUtil.SIMPLE_DATE);
		}
		return "";
	}
	public String getFormattedModifyTimestamp() {
		if(this.getModifiedDate() != null) {
			return DateUtil.changeDateFormat(this.getModifiedDate(), DateUtil.COMPACT_TIMESTAMP, DateUtil.DB_TIMESTAMP);
		}
		return "";
	}
	
	public String getCreatedDate() {
		return createdDate;
	}
	public String getCreatedIp() {
		return createdIp;
	}
	public String getModifiedDate() {
		return modifiedDate;
	}
	public String getModifiedIp() {
		return modifiedIp;
	}
	public String getIsDeleted() {
		return isDeleted;
	}
	public String getSearchCondition() {
		return searchCondition;
	}
	public String getSearchKeyword() {
		return searchKeyword;
	}
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	public void setCreatedIp(String createdIp) {
		this.createdIp = createdIp;
	}
	public void setModifiedDate(String modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	public void setModifiedIp(String modifiedIp) {
		this.modifiedIp = modifiedIp;
	}
	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}
	public void setSearchCondition(String searchCondition) {
		this.searchCondition = searchCondition;
	}
	public void setSearchKeyword(String searchKeyword) {
		this.searchKeyword = searchKeyword;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	public Long getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(Long modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
}
