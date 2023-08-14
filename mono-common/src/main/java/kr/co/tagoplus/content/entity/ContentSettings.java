package kr.co.tagoplus.content.entity;

import kr.co.tagoplus.common.model.GeneralVO;
import kr.co.tagoplus.file.entity.FileDetail;

import java.util.ArrayList;
import java.util.List;

public class ContentSettings extends GeneralVO {
	private static final long serialVersionUID = -3316383627937445851L;

	//암호  => MAIN_LOGO, FOOTER_LOG, PAGE, FAVICON, COPYRIGHT, FOOTER_HTML, MENU
    private String code;

    //COMMON_CODE => codeGroup: CONTENT_TYPE => HTML, MENU, RAW, URL, FILE
    private String contentType;

    private String name;

    private Long menuSeq;

    //제목
    private String title;

    //설명
    private String url;

    private String useYn;

    private String content;
    
    private List<FileDetail> attachments = new ArrayList<FileDetail>();
    
    private long fileGroupSeq;
    
    private String fieldsJson;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getMenuSeq() {
        return menuSeq;
    }

    public void setMenuSeq(Long menuSeq) {
        this.menuSeq = menuSeq;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<FileDetail> getAttachments() {
		return attachments;
	}

	public void setAttachments(List<FileDetail> attachments) {
		this.attachments = attachments;
	}

	public long getFileGroupSeq() {
		return fileGroupSeq;
	}

	public void setFileGroupSeq(long fileGroupSeq) {
		this.fileGroupSeq = fileGroupSeq;
	}
	
	public String getFieldsJson() {
        return fieldsJson;
    }

    public void setFieldsJson(String fieldsJson) {
        this.fieldsJson = fieldsJson;
    }
}
