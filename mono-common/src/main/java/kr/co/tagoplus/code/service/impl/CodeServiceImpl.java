package kr.co.tagoplus.code.service.impl;

import kr.co.tagoplus.code.entity.Code;
import kr.co.tagoplus.code.service.CodeMapper;
import kr.co.tagoplus.code.service.CodeService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.text.CaseUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class CodeServiceImpl extends AbstractGenericServiceImpl<Code, String> implements CodeService {
	protected static Logger logger = LoggerFactory.getLogger(CodeServiceImpl.class);

	@Autowired
	private CodeMapper mapper;
	
	@Override
	public GenericMapper<Code, String> getMapper() {
		return mapper;
	}

    @Override
    public Code getByGroupAndCode(String codeGroup, String code) {
        return mapper.getByGroupAndCode(codeGroup, code);
    }

    @Override
    public List<Code> getBySeqArr(String codeArr) {
        return mapper.getBySeqArr(codeArr);
    }

    @Override
    public List<Code> getList(Map<String, Object> params) {
        return mapper.getList(params);
    }

    @Override
    public List<Code> getAllGroupCodes() {
        return mapper.getAllGroupCodes();
    }

    @Override
    public int deleteByCode(String codeGroup, String code) {
        return mapper.deleteByCode(codeGroup, code);
    }

    @Override
    public int insert(Code code) {
        return mapper.insert(code);
    }

	@Override
	public List<Code> getByGroup(String group) {
		return mapper.getByGroup(group);
	}

	@Override
	public Map<String, Object> getByBulkGroups(String groups) {
		if (groups == null) {
            return null;
        }
		
		return getByBulkGroups(List.of(groups.split(",")));
	}

	@Override
	public Map<String, Object> getByBulkGroups(List<String> groups) {
		if (groups == null || groups.isEmpty()) {
            return null;
        }

        Map<String, Object> result = new HashMap<String, Object>();
        for (String group : groups) {
        	group = StringUtils.trim(group);
            List<Code> codeList = getByGroup(group);
            result.put(CaseUtils.toCamelCase(group, false, '_'), codeList);
        }

        return result;
    }
    
    @Override
	public List<Code> getListByGroup(String codeGroup) {
		return mapper.getListByGroup(codeGroup);
	}

	@Override
	public Code getByGroupAndCodeName(String codeGroup, String codeName) {
		return mapper.getByGroupAndCodeName(codeGroup, codeName);
	}
	
	@Override
	public Code getBySeq(long seq) {
		return mapper.getBySeq(seq);
	}
}
