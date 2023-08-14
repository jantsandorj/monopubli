package kr.co.tagoplus.community.entity;

import javax.persistence.Transient;

import java.util.ArrayList;
import java.util.List;
import kr.co.tagoplus.file.entity.FileDetail;

import kr.co.tagoplus.common.model.GeneralVO;

public class Board extends GeneralVO {
	private static final long serialVersionUID = -9202074327260798281L;

	//순번
	private long seq;

	//게시판유형
	private String boardType;

	//제목
	private String title;

	//내용
	private String contents;

	//상단공지
	private String topNoticeYn;

	//팝업여부
	private String popupYn;

	//팝업시작일자
	private String popupStartDay;

	//팝업종료일자
	private String popupEndDay;

	//죄회수
	private int viewCnt;
	
	//부모순번
	private long fileGrpId;

	private String downloadZip;

	private List<FileDetail> attachments = new ArrayList<FileDetail>();

	@Transient
	private int attachCount = 0;

	@Transient
	private Board previousBoard;

	@Transient
	private Board nextBoard;

	public long getSeq() {
		return seq;
	}

	public void setSeq(long seq) {
		this.seq = seq;
	}

	public String getBoardType() {
		return boardType;
	}

	public void setBoardType(String boardType) {
		this.boardType = boardType;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	public String getTopNoticeYn() {
		return topNoticeYn;
	}

	public void setTopNoticeYn(String topNoticeYn) {
		this.topNoticeYn = topNoticeYn;
	}

	public String getPopupYn() {
		return popupYn;
	}

	public void setPopupYn(String popupYn) {
		this.popupYn = popupYn;
	}

	public String getPopupStartDay() {
		return popupStartDay;
	}

	public void setPopupStartDay(String popupStartDay) {
		this.popupStartDay = popupStartDay;
	}

	public String getPopupEndDay() {
		return popupEndDay;
	}

	public void setPopupEndDay(String popupEndDay) {
		this.popupEndDay = popupEndDay;
	}

	public int getViewCnt() {
		return viewCnt;
	}

	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}

	public long getFileGrpId() {
		return fileGrpId;
	}

	public void setFileGrpId(long fileGrpId) {
		this.fileGrpId = fileGrpId;
	}

	public List<FileDetail> getAttachments() {
		return attachments;
	}

	public void setAttachments(List<FileDetail> attachments) {
		this.attachments = attachments;
	}

	public int getAttachCount() {
		return attachCount;
	}

	public void setAttachCount(int attachCount) {
		this.attachCount = attachCount;
	}

	public Board getPreviousBoard() {
		return previousBoard;
	}

	public void setPreviousBoard(Board previousBoard) {
		this.previousBoard = previousBoard;
	}

	public Board getNextBoard() {
		return nextBoard;
	}

	public void setNextBoard(Board nextBoard) {
		this.nextBoard = nextBoard;
	}

	public String getDownloadZip() {
		return downloadZip;
	}

	public void setDownloadZip(String downloadZip) {
		this.downloadZip = downloadZip;
	}

}