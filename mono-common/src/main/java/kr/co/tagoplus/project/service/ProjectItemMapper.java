package kr.co.tagoplus.project.service;

import kr.co.tagoplus.project.entity.ProjectItem;
import kr.co.tagoplus.common.service.GenericMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProjectItemMapper extends GenericMapper<ProjectItem, Long> {
    public int insertSkill(ProjectItem projectItem);
    public int insertWorker(ProjectItem projectItem);
    public int deleteSkill(Long projectItemSeq);
    public int deleteItemWorkerBySeq(Long projectItemSeq);
    public int updateIsCompletedManager(ProjectItem projectItem);
    public List<ProjectItem> getByProjectSeq (Long projectSeq);
}
