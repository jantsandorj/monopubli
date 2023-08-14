package kr.co.tagoplus.common.model;

import org.springframework.web.multipart.MultipartFile;

public class SiteInfoFile {

	public MultipartFile favLogo;
	public MultipartFile headerLogo;
	public MultipartFile footerLogo;
	public MultipartFile getFavLogo() {
		return favLogo;
	}
	public void setFavLogo(MultipartFile favLogo) {
		this.favLogo = favLogo;
	}
	public MultipartFile getHeaderLogo() {
		return headerLogo;
	}
	public void setHeaderLogo(MultipartFile headerLogo) {
		this.headerLogo = headerLogo;
	}
	public MultipartFile getFooterLogo() {
		return footerLogo;
	}
	public void setFooterLogo(MultipartFile footerLogo) {
		this.footerLogo = footerLogo;
	}
}