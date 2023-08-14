package kr.co.tagoplus.admin.settings.controller;

import kr.co.tagoplus.settings.entity.SiteInfo;
import kr.co.tagoplus.settings.service.SiteInfoService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.SiteInfoFile;
import kr.co.tagoplus.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


@RestController
public class AdminSiteInfoRestController {

	@Autowired
	private SiteInfoService siteInfoService;
	
	@Autowired
	private FileService fileService;

	@GetMapping(value = "/api/siteinfo")
	public ResponseEntity<Object> getSiteInfo() {
		
		SiteInfo siteInfo = siteInfoService.getSiteInfo();
		return ResponseEntityUtil.success(siteInfo);
	}

	@PostMapping(value = "/api/siteinfo/update")
	public ResponseEntity<Object> updateSiteInfo(SiteInfoFile attachFile, SiteInfo siteInfo, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		if(attachFile.getFavLogo() != null) {
			if (Long.valueOf(siteInfo.getFavFileGroupSeq()) == null || siteInfo.getFavFileGroupSeq() == 0) {
				siteInfo.setFavFileGroupSeq(fileService.generateFileGroup());
			} else {
				fileService.deleteByFileGroup(siteInfo.getFavFileGroupSeq());
			}
			fileService.fileStore(attachFile.getFavLogo(), "SiteInfo", siteInfo.getFavFileGroupSeq());
		}
		
		if(attachFile.getHeaderLogo() != null) {
			if (Long.valueOf(siteInfo.getHeaderFileGroupSeq()) == null || siteInfo.getHeaderFileGroupSeq() == 0) {
				siteInfo.setHeaderFileGroupSeq(fileService.generateFileGroup());
			} else {
				fileService.deleteByFileGroup(siteInfo.getHeaderFileGroupSeq());
			}
			fileService.fileStore(attachFile.getHeaderLogo(), "SiteInfo", siteInfo.getHeaderFileGroupSeq());
		}
		
		if(attachFile.getFooterLogo() != null) {
			if (Long.valueOf(siteInfo.getFooterFileGroupSeq()) == null || siteInfo.getFooterFileGroupSeq() == 0) {
				siteInfo.setFooterFileGroupSeq(fileService.generateFileGroup());
			} else {
				fileService.deleteByFileGroup(siteInfo.getFooterFileGroupSeq());
			}
			fileService.fileStore(attachFile.getFooterLogo(), "SiteInfo", siteInfo.getFooterFileGroupSeq());
		}

		int affactedRows = siteInfoService.update(siteInfo);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(siteInfo);
		}

		return ResponseEntityUtil.error("error.update");
	}
	
}