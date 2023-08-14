package kr.co.tagoplus.settings.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.settings.entity.Skill;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface SkillMapper extends GenericMapper<Skill, Integer> {
    public List<Skill> getByProjectItemSeq(Long projectItemseq);
    public List<Skill> getAll();
}
