package kr.co.tagoplus.project.service;

import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.common.service.GenericService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface ProjectService extends GenericService<Project, Long> {

    public int register(Project project);
    public int updatePrice(Project project);
    public int updateDetail(Project project);
    public int updateProcess(Project project);
    public int updateSource(Project project);

    public int insertManager(Project project);
    public int deleteManager(Project project);
    public int deleteManagerByProjectSeq(Project project);

    public Page<Project> getListByUser(Map<String, Object> params, Pageable pageable);
    public List<Project> getByUserWithLimit(Long projectSeq);
    public List<Project> getStatistic();
    public List<Project> getCompletedByLimit();
}
