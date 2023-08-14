package kr.co.tagoplus.settings.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.settings.entity.Skill;

import java.util.List;


public interface SkillService extends GenericService<Skill, Integer> {

    public List<Skill> getAll();

}