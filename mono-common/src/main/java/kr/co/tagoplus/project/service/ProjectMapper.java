package kr.co.tagoplus.project.service;

import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.common.service.GenericMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProjectMapper extends GenericMapper<Project, Long> {
    public int updatePrice(Project project);
    public int updateDetail(Project project);
    public int updateProcess(Project project);
    public int updateSource(Project project);
    public int insertManager(Project project);
    public int deleteManager(Project project);
    public int deleteManagerByProjectSeq(Project project);

    public List<Project> getListByUser(Map<String, Object> params);
    public List<Project> getByUserWithLimit(Long projectSeq);
    public List<Project> getStatistic();
    public List<Project> getCompletedByLimit();
}
