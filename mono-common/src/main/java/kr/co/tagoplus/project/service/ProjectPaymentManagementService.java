package kr.co.tagoplus.project.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.project.entity.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface ProjectPaymentManagementService extends GenericService<Project, Long> {

    public Project getByProjectSeq(Long projectSeq);

    public Page<Project> getProjectPaymentTaxList(Map<String, Object> params, Pageable pageable);

    long countTaxList(Map<String, Object> params);
}
