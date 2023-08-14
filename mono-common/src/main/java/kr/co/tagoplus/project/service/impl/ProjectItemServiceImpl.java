package kr.co.tagoplus.project.service.impl;

import kr.co.tagoplus.auth.service.impl.UserServiceImpl;
import kr.co.tagoplus.project.entity.ProjectItem;
import kr.co.tagoplus.project.service.ProjectItemMapper;
import kr.co.tagoplus.project.service.ProjectItemService;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional("transactionManager")
public class ProjectItemServiceImpl extends AbstractGenericServiceImpl<ProjectItem, Long> implements ProjectItemService {
    protected static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private ProjectItemMapper mapper;

    @Override
    protected GenericMapper<ProjectItem, Long> getMapper() {
        return mapper;
    }

    @Override
    public List<ProjectItem> getByIdList(Iterable<Long> idList) {
        return null;
    }

    @Override
    public int deleteByBulk(Iterable<Long> idList) {
        return 0;
    }

    @Override
    public int register(ProjectItem projectItem) {
        return mapper.insert(projectItem);
    }
    public int registerSkill(ProjectItem projectItem) {
        return mapper.insertSkill(projectItem);
    }

    @Override
    public int registerWorker(ProjectItem projectItem) {
        return mapper.insertWorker(projectItem);
    }

    public int deleteSkill(Long projectItemSeq){return mapper.deleteSkill(projectItemSeq);}

    @Override
    public int deleteWorker(Long projectItemSeq) {
        return mapper.deleteItemWorkerBySeq(projectItemSeq);
    }

    @Override
    public int updateIsCompletedManager(ProjectItem projectItem) {
        return mapper.updateIsCompletedManager(projectItem);
    }

    public List<ProjectItem> getByProjectSeq(Long projectSeq) {
        return mapper.getByProjectSeq(projectSeq);
    }
}

