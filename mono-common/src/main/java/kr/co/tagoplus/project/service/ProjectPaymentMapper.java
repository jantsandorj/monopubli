package kr.co.tagoplus.project.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.entity.ProjectPayment;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface ProjectPaymentMapper extends GenericMapper<ProjectPayment, Long> {
    public ProjectPayment getByProjectSeq(Long projectSeq);

    public int deleteByProjectSeq(Long projectSeq);

    public int updateProjectSituation(Project project);

    public Map<String, Object> getPaymentTaxStats();

    public Map<String, Object> getPaymentReceivableStats();
}
