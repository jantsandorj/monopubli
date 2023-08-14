package kr.co.tagoplus.admin.auth.controller;

import kr.co.tagoplus.auth.entity.AuthorInfo;
import kr.co.tagoplus.auth.entity.AuthorRole;
import kr.co.tagoplus.auth.service.AuthorInfoService;
import kr.co.tagoplus.auth.service.AuthorRoleService;
import kr.co.tagoplus.common.component.ResponseEntityUtil;
import kr.co.tagoplus.common.helper.UserDetailsHelper;
import kr.co.tagoplus.common.model.StringRoleMenuSeqList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class AdminAuthorRestController {
	
	@Autowired
	private AuthorInfoService authorService;
	
	@Autowired
	private AuthorRoleService authorRoleService;

	@GetMapping(value = "/api/author/infos")
	public ResponseEntity<Object> getAuthorInfos(@RequestParam Map<String, Object> params, Pageable pageable) {
		Page<AuthorInfo> infos = authorService.getPagedByFilter(params, pageable);

		return ResponseEntityUtil.list(infos);
	}
	
	@GetMapping(value = "/api/author/infolist")
	public ResponseEntity<Object> getAuthorInfoList(@RequestParam Map<String, Object> params) {
		List<AuthorInfo> infos = authorService.getAll();

		return ResponseEntityUtil.success(infos);
	}

	@GetMapping(value = "/api/author/infos/{authorCd:\\d+}")
	public ResponseEntity<Object> getAuthorInfoDetail(@PathVariable String authorCd) {
		AuthorInfo info = authorService.getById(authorCd);
		if (info != null) {
			return ResponseEntityUtil.success(info);
		}

		return ResponseEntityUtil.empty();
	}

	@PostMapping(value = "/api/author/infos/create")
	public ResponseEntity<Object> createAdmins(AuthorInfo authorInfo, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		
		//if(adminService.existByPhone(admin.getPhone())) {
		//	return ResponseEntityUtil.error("error.duplicate.phone");
		//}
		
		int affactedRows = authorService.insert(authorInfo);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(authorInfo);
		}

		return ResponseEntityUtil.error("error.insert");
	}

	@PostMapping(value = "/api/author/infos/update")
	public ResponseEntity<Object> updateAdmins(AuthorInfo authorInfo, BindingResult binding) throws BindException {
		if (binding.hasErrors()) {
			throw new BindException(binding);
		}
		

		int affactedRows = authorService.update(authorInfo);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(authorInfo);
		}

		return ResponseEntityUtil.error("error.update");
	}

	@PostMapping(value = "/api/author/infos/delete/{authorCd}")
	public ResponseEntity<Object> deleteAuthorInfos(@PathVariable String authorCd) {

		int affactedRows = authorService.deleteById(authorCd);

		if (affactedRows > 0) {
			return ResponseEntityUtil.success(null);
		}			

		return ResponseEntityUtil.error("error.delete");
	}
	
	
	@PostMapping(value = "/api/author/roles/create")
	public ResponseEntity<Object> createRoles(@RequestBody StringRoleMenuSeqList roleMenuSeqList, Authentication authentication) throws BindException {
		
		authorRoleService.deleteById(roleMenuSeqList.getAuthorCd());
		AuthorRole role;
		for(String seq : roleMenuSeqList.getSeq()) {
			role = new AuthorRole();
			role.setAuthorCd(roleMenuSeqList.getAuthorCd());
			role.setMenuSeq(seq);
			role.setCreatedBy( UserDetailsHelper.findLoggedInSeq(authentication));
			authorRoleService.insert(role);
		}
		return ResponseEntityUtil.success(null);
	}
	
}