package kr.co.tagoplus.project.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.project.entity.Project;
import kr.co.tagoplus.project.entity.ProjectPayment;
import kr.co.tagoplus.project.service.ProjectPaymentMapper;
import kr.co.tagoplus.project.service.ProjectPaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional("transactionManager")
public class ProjectPaymentServiceImpl extends AbstractGenericServiceImpl<ProjectPayment, Long> implements ProjectPaymentService {
    protected static Logger logger = LoggerFactory.getLogger(ProjectPaymentServiceImpl.class);

    @Autowired
    private ProjectPaymentMapper mapper;

    @Override
    protected GenericMapper<ProjectPayment, Long> getMapper() {
        return mapper;
    }

    public ProjectPayment getByProjectSeq(Long projectSeq){
        return mapper.getByProjectSeq(projectSeq);
    }

    @Override
    public int deleteByProjectSeq(Long projectSeq) {
        return mapper.deleteByProjectSeq(projectSeq);
    }

    public int updateProjectSituation(Project project){
        return mapper.updateProjectSituation(project);
    }

    public Map<String, Object> getPaymentTaxStats(){
        return mapper.getPaymentTaxStats();
    }

    public Map<String, Object> getPaymentReceivableStats(){
        return mapper.getPaymentReceivableStats();
    }

    public String getProjectPaymentType(List<ProjectPayment> projectPayments){
        String paymentType = "D";
        int i = 0;
        for(ProjectPayment item: projectPayments){
            if (!"".equals(item.getEstimatedDate()) && "".equals(item.getActualDate())) {
                paymentType = item.getPaymentType();
                break;
            } else if("".equals(item.getEstimatedDate()) && "".equals(item.getActualDate())) {
                paymentType = projectPayments.get(i - 1).getPaymentType();
                break;
            }
            if(i + 1 == projectPayments.size()){
                paymentType = item.getPaymentType();
            }
            i++;
        }

        return paymentType;
    }

}
