package kr.co.tagoplus.common.model;

import org.springframework.web.multipart.MultipartFile;

public class CommonFile {

	public MultipartFile pcImage;
	public MultipartFile mobileImage;
	
	public MultipartFile getPcImage() {
		return pcImage;
	}
	public void setPcImage(MultipartFile pcImage) {
		this.pcImage = pcImage;
	}
	public MultipartFile getMobileImage() {
		return mobileImage;
	}
	public void setMobileImage(MultipartFile mobileImage) {
		this.mobileImage = mobileImage;
	}

}