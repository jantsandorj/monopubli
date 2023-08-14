package kr.co.tagoplus.auth.service;

import kr.co.tagoplus.auth.entity.AuthorRole;
import kr.co.tagoplus.common.service.GenericService;


public interface AuthorRoleService extends GenericService<AuthorRole, String> {
	public int deleteById(String authorCd);
}
