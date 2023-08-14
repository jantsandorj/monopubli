package kr.co.tagoplus.project.service.impl;

import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.service.ProjectMapper;
import kr.co.tagoplus.project.service.ProjectService;
import kr.co.tagoplus.common.service.GenericMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;

import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class ProjectServiceImpl extends AbstractGenericServiceImpl<Project, Long> implements ProjectService {
    protected static Logger logger = LoggerFactory.getLogger(ProjectServiceImpl.class);

    @Autowired
    private ProjectMapper mapper;

    @Override
    protected GenericMapper<Project, Long> getMapper() {
        return mapper;
    }

    @Override
    public int register(Project project) {
        return mapper.insert(project);
    }
    public int updatePrice(Project project) {
        return mapper.updatePrice(project);
    }
    public int updateDetail(Project project) {
        return mapper.updateDetail(project);
    }

    @Override
    public int updateProcess(Project project) {
        return mapper.updateProcess(project);
    }

    @Override
    public int updateSource(Project project) {
        return mapper.updateSource(project);
    }

    public int insertManager(Project project) {
        return mapper.insertManager(project);
    }

    public int deleteManager(Project project) {
        return mapper.deleteManager(project);
    }

    public int deleteManagerByProjectSeq(Project project) {
        return mapper.deleteManagerByProjectSeq(project);
    }

    @Override
    public Page<Project> getListByUser(Map<String, Object> params, Pageable pageable) {
        if(params != null) {
            params.put("page", pageable);
        }

        List<Project> list = (List<Project>) mapper.getListByUser(params);

        return PageableExecutionUtils.getPage(list, pageable,
                () -> countByFilter(params));
    }

    @Override
    public List<Project> getByUserWithLimit(Long projectSeq) {
        return mapper.getByUserWithLimit(projectSeq);
    }

    @Override
    public List<Project> getStatistic() {
        return mapper.getStatistic();
    }

    @Override
    public List<Project> getCompletedByLimit() {
        return mapper.getCompletedByLimit();
    }
}
