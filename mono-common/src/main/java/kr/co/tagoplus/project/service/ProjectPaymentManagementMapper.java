package kr.co.tagoplus.project.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.project.entity.Project;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProjectPaymentManagementMapper extends GenericMapper<Project, Long> {

    public Project getByProjectSeq(Long projectSeq);

    public List<Project> getProjectPaymentTaxList(Map<String, Object> params);

    long countTaxList(Map<String, Object> params);
}
