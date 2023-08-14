package kr.co.tagoplus.project.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.entity.ProjectPayment;

import java.util.List;
import java.util.Map;

public interface ProjectPaymentService extends GenericService<ProjectPayment, Long> {

    public ProjectPayment getByProjectSeq(Long projectSeq);

    public int deleteByProjectSeq(Long projectSeq);

    public int updateProjectSituation(Project project);

    public Map<String, Object> getPaymentTaxStats();

    public Map<String, Object> getPaymentReceivableStats();

    public String getProjectPaymentType(List<ProjectPayment> projectPayments);
}
