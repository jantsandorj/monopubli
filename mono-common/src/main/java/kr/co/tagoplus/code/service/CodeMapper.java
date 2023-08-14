package kr.co.tagoplus.code.service;

import kr.co.tagoplus.code.entity.Code;
import kr.co.tagoplus.common.service.GenericMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface CodeMapper extends GenericMapper<Code, String> {

	public Code getByGroupAndCodeName(@Param("codeGroup") String codeGroup, @Param("codeName") String codeName);
    public Code getByGroupAndCode(String codeGroup, String code);
    
    public List<Code> getBySeqArr(String codeArr);
    public List<Code> getList(Map<String, Object> params);
    public List<Code> getAllGroupCodes();
    public List<Code> getByGroup(String group);
    public List<Code> getListByGroup(String codeGroup);
    
    public int deleteByCode(String codeGroup, String code);
    public int insert(Code code);
	public Code getBySeq(long seq);
    public List<Code> getByAdminSeq(Long seq);
}
