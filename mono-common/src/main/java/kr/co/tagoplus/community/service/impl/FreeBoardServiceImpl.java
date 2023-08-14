package kr.co.tagoplus.community.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.FreeBoard;
import kr.co.tagoplus.community.service.FreeBoardMapper;
import kr.co.tagoplus.community.service.FreeBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("transactionManager")
public class FreeBoardServiceImpl extends AbstractGenericServiceImpl<FreeBoard, Integer> implements FreeBoardService {

    @Autowired
    private FreeBoardMapper mapper;

    @Override
    protected GenericMapper<FreeBoard, Integer> getMapper() {
        return mapper;
    }

    @Override
    public FreeBoard getBySeq(int seq) {
        return mapper.getBySeq(seq);
    }

    @Override
    public int update(FreeBoard freeBoard) {
        freeBoard.setModifiedDate(DateUtil.getTimestampAsCompact());
        return mapper.update(freeBoard);
    }
}
