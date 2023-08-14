package kr.co.tagoplus.project.service;

import kr.co.tagoplus.project.entity.ProjectItem;
import kr.co.tagoplus.common.service.GenericMapper;

import java.util.List;

public interface ProjectItemService extends GenericMapper<ProjectItem, Long> {
    public int register(ProjectItem projectItem);
    public int registerSkill(ProjectItem projectItem);
    public int registerWorker(ProjectItem projectItem);

    public int deleteSkill(Long projectItemSeq);
    public int deleteWorker(Long projectItemSeq);
    public int updateIsCompletedManager(ProjectItem projectItem);

    public List<ProjectItem> getByProjectSeq (Long projectSeq);
}
