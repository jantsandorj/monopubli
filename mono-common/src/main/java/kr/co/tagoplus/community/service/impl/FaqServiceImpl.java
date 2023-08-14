package kr.co.tagoplus.community.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.Faq;
import kr.co.tagoplus.community.service.FaqMapper;
import kr.co.tagoplus.community.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("transactionManager")
public class FaqServiceImpl extends AbstractGenericServiceImpl<Faq, Integer> implements FaqService {

    @Autowired
    private FaqMapper mapper;

    @Override
    protected GenericMapper<Faq, Integer> getMapper() {
        return mapper;
    }

    @Override
    public int update(Faq faq) {
        faq.setModifiedDate(DateUtil.getTimestampAsCompact());
        return mapper.update(faq);
    }

    public Faq getBySeq(int seq) {
        return mapper.getBySeq(seq);
    }
}
