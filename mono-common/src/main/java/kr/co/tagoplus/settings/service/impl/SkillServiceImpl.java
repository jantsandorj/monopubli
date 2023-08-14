package kr.co.tagoplus.settings.service.impl;


import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.settings.entity.Skill;
import kr.co.tagoplus.settings.service.SkillMapper;
import kr.co.tagoplus.settings.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional("transactionManager")
public class SkillServiceImpl extends AbstractGenericServiceImpl<Skill, Integer> implements SkillService {
	
	@Autowired
	SkillMapper mapper;
	
	@Override
	public GenericMapper<Skill, Integer> getMapper() {
		return mapper;
	}

	public List<Skill> getAll() {
		return mapper.getAll();
	}


}