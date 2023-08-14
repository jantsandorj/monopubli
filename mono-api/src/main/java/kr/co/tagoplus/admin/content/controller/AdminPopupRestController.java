package kr.co.tagoplus.admin.content.controller;

import kr.co.tagoplus.popup.entity.Popup;
import kr.co.tagoplus.popup.service.PopupService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.model.CommonFile;
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
public class AdminPopupRestController {
	//private static Logger logger = LoggerFactory.getLogger(AdminPopupRestController.class);

	@Autowired
	private PopupService popupService;
	
	@Autowired
	private FileService fileService;

	@GetMapping(value = "/api/popups")
	public ResponseEntity<Object> getPopupList(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<Popup> popups = popupService.getPagedByFilter(params, pageable);
		
		return ResponseEntityUtil.list(popups);
	}

	@GetMapping(value = "/api/popups/{seq:\\d+}")
	public ResponseEntity<Object> getPopupDetail(@PathVariable Long seq) {
		Popup popup = popupService.getById(seq);
		if (popup != null) {
			return ResponseEntityUtil.success(popup);
		}

		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/popups/create")
	public ResponseEntity<Object> createPopups(CommonFile attachments, Popup popup, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		long pcFileGroupSeq;
		long mobileFileGroupSeq;
		
		if(attachments.getPcImage() != null) {
			pcFileGroupSeq = fileService.generateFileGroup();
			fileService.fileStore(attachments.getPcImage(), "Popup", pcFileGroupSeq);
			popup.setPcFileGroupSeq(pcFileGroupSeq);
		}
		if(attachments.getMobileImage() != null) {
			mobileFileGroupSeq = fileService.generateFileGroup();
			fileService.fileStore(attachments.getMobileImage(), "Popup", mobileFileGroupSeq);
			popup.setMobileFileGroupSeq(mobileFileGroupSeq);
		}
		
		int affactedRows = popupService.insert(popup);

		if (affactedRows > 0)
			return ResponseEntityUtil.success(popup);

		return ResponseEntityUtil.error("error.insert");
	}

	@PostMapping(value = "/api/popups/update")
	public ResponseEntity<Object> updatePopups(CommonFile attachments, Popup popup, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}

		if(attachments.getPcImage() != null) {
			if(Long.valueOf(popup.getPcFileGroupSeq()) == null)
				popup.setPcFileGroupSeq(fileService.generateFileGroup());
			else
				fileService.deleteByFileGroup(popup.getPcFileGroupSeq());
			fileService.fileStore(attachments.getPcImage(), "Popup", popup.getPcFileGroupSeq());
		}
		if(attachments.getMobileImage() != null) {
			if(Long.valueOf(popup.getMobileFileGroupSeq()) == null)
				popup.setMobileFileGroupSeq(fileService.generateFileGroup());
			else
				fileService.deleteByFileGroup(popup.getMobileFileGroupSeq());
			fileService.fileStore(attachments.getMobileImage(), "Popup", popup.getMobileFileGroupSeq());
		}
		
		int affactedRows = popupService.update(popup);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(popup);
		}

		return ResponseEntityUtil.error("error.update");
	}

	@PostMapping(value = "/api/popups/delete/{seq}")
	public ResponseEntity<Object> deleteAdmins(@PathVariable Long seq) {

		int affactedRows = popupService.deleteById(seq);

		if (affactedRows > 0)
			return ResponseEntityUtil.success(null);

		return ResponseEntityUtil.error("error.delete");
	}
	
	
}