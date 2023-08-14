package kr.co.tagoplus.community.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.Qna;
import kr.co.tagoplus.community.service.QnaMapper;
import kr.co.tagoplus.community.service.QnaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional("transactionManager")
public class QnaServiceImpl extends AbstractGenericServiceImpl<Qna, Integer> implements QnaService {

    @Autowired
    private QnaMapper mapper;

    @Override
    protected GenericMapper<Qna, Integer> getMapper() {
        return mapper;
    }

    @Override
    public Qna getBySeq(int seq) {
        return mapper.getBySeq(seq);
    }

    @Override
    public int update(Qna qna) {
        return mapper.update(qna);
    }

    @Override
    public int deleteBySeq(int seq) {
        return mapper.deleteBySeq(seq);
    }

    @Override
    public int updateViewCount(int seq) {
        return mapper.updateViewCount(seq);
    }

    @Override
    public List<Qna> getLatestQnas(){
        return mapper.getLatestQnas();
    };
}
