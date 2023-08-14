package kr.co.tagoplus.project.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.service.ProjectPaymentManagementMapper;
import kr.co.tagoplus.project.service.ProjectPaymentManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class ProjectPaymentManagementServiceImpl extends AbstractGenericServiceImpl<Project, Long> implements ProjectPaymentManagementService {
    protected static Logger logger = LoggerFactory.getLogger(ProjectPaymentManagementServiceImpl.class);

    @Autowired
    private ProjectPaymentManagementMapper mapper;

    @Override
    protected GenericMapper<Project, Long> getMapper() {
        return mapper;
    }

    public Project getByProjectSeq(Long projectSeq){
        return mapper.getByProjectSeq(projectSeq);
    }

    public Page<Project> getProjectPaymentTaxList(Map<String, Object> params, Pageable pageable){
        if(params != null) {
            params.put("page", pageable);
        }

        List<Project> list = mapper.getProjectPaymentTaxList(params);

        return PageableExecutionUtils.getPage(list, pageable,
                () -> countTaxList(params));
    }

    public long countTaxList(Map<String, Object> params) {
        return mapper.countTaxList(params);
    }

}
