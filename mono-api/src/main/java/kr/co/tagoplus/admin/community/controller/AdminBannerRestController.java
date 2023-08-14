package kr.co.tagoplus.admin.community.controller;

import kr.co.tagoplus.community.entity.Banner;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.CommonFile;
import kr.co.tagoplus.community.service.BannerService;
import kr.co.tagoplus.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AdminBannerRestController {
	//private static Logger logger = LoggerFactory.getLogger(AdminBannerRestController.class);

	@Autowired
	private BannerService bannerService;
	
	@Autowired
	private FileService fileService;

	@GetMapping(value = "/api/banners")
	public ResponseEntity<Object> getBannerList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<Banner> banners = bannerService.getPagedByFilter(params, pageable);

		return ResponseEntityUtil.list(banners);
	}

	@GetMapping(value = "/api/banners/{seq:\\d+}")
	public ResponseEntity<Object> getBannerDetail(@PathVariable Long seq) {
		Banner banner = bannerService.getById(seq);
		if (banner != null)
			return ResponseEntityUtil.success(banner);

		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/banners/create")
	public ResponseEntity<Object> createBanners(CommonFile attachments, Banner banner, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		long pcFileGroupSeq;
		long mobileFileGroupSeq;
		
		if(attachments.getPcImage() != null) {
			pcFileGroupSeq = fileService.generateFileGroup();
			fileService.fileStore(attachments.getPcImage(), "Banner", pcFileGroupSeq);
			banner.setPcFileGroupSeq(pcFileGroupSeq);
		}
		if(attachments.getMobileImage() != null) {
			mobileFileGroupSeq = fileService.generateFileGroup();
			fileService.fileStore(attachments.getMobileImage(), "Banner", mobileFileGroupSeq);
			banner.setMobileFileGroupSeq(mobileFileGroupSeq);
		}
		
		int result = bannerService.insert(banner);

		if (result > 0) {
			return ResponseEntityUtil.success(banner);
		}

		return ResponseEntityUtil.error("error.insert");
	}

	@PostMapping(value = "/api/banners/update")
	public ResponseEntity<Object> updateBanners(CommonFile attachments, Banner banner, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		if(attachments.getPcImage() != null) {
			if(Long.valueOf(banner.getPcFileGroupSeq()) == null || banner.getPcFileGroupSeq() == 0)
				banner.setPcFileGroupSeq(fileService.generateFileGroup());
			else
				fileService.deleteByFileGroup(banner.getPcFileGroupSeq());
			fileService.fileStore(attachments.getPcImage(), "Popup", banner.getPcFileGroupSeq());
		}
			
		if(attachments.getMobileImage() != null) {
			if (Long.valueOf(banner.getMobileFileGroupSeq()) == null || banner.getMobileFileGroupSeq() == 0)
				banner.setMobileFileGroupSeq(fileService.generateFileGroup());
			else
				fileService.deleteByFileGroup(banner.getMobileFileGroupSeq());
			fileService.fileStore(attachments.getMobileImage(), "Banner", banner.getMobileFileGroupSeq());
		}
		
		int affactedRows = bannerService.update(banner);
		if (affactedRows > 0) {
			return ResponseEntityUtil.success(banner);
		}
		return ResponseEntityUtil.error("error.update");
	}

	@PostMapping(value = "/api/banners/delete/{seq}")
	public ResponseEntity<Object> deleteUsers(@PathVariable Long seq) {

		int affactedRows = bannerService.deleteById(seq);

		if (affactedRows > 0)
			return ResponseEntityUtil.success(null);

		return ResponseEntityUtil.error("error.delete");
	}
	
}