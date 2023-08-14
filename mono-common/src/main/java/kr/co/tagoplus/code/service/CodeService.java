package kr.co.tagoplus.code.service;

import kr.co.tagoplus.code.entity.Code;
import kr.co.tagoplus.common.service.GenericService;

import java.util.List;
import java.util.Map;

public interface CodeService extends GenericService<Code, String> {

	public Code getByGroupAndCodeName(String codeGroup, String codeName);
    public Code getByGroupAndCode(String codeGroup, String code);
    
    public List<Code> getBySeqArr(String codeArr);
    public List<Code> getList(Map<String, Object> params);
    public List<Code> getAllGroupCodes();
    public List<Code> getByGroup(String group);
    public List<Code> getListByGroup(String codeGroup);
    
	public Map<String, Object> getByBulkGroups(String groups);
	public Map<String, Object> getByBulkGroups(List<String> groups);

    public int deleteByCode(String codeGroup, String code);
    public int insert(Code code);
	
	public Code getBySeq(long seq);

}