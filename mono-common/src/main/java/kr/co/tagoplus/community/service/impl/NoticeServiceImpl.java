package kr.co.tagoplus.community.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.DateUtil;
import kr.co.tagoplus.community.entity.Notice;
import kr.co.tagoplus.community.service.NoticeMapper;
import kr.co.tagoplus.community.service.NoticeService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("transactionManager")
public class NoticeServiceImpl extends AbstractGenericServiceImpl<Notice, Integer> implements NoticeService {

    @Autowired
    private NoticeMapper mapper;

    @Override
    protected GenericMapper<Notice, Integer> getMapper() {
        return mapper;
    }

    @Override
    public Notice getBySeq(int seq) {
        return mapper.getBySeq(seq);
    }

    @Override
    public Notice getPrevNext(Map<String, Object> params) {
        return mapper.getPrevNext(params);
    }

    @Override
    public int update(Notice notice) {
        notice.setModifiedDate(DateUtil.getTimestampAsCompact());
        return mapper.update(notice);
    }
    
    @Override
    public List<Notice> getByLimit(){
    	return mapper.getByLimit();
    }

    @Override
    public List<Notice> getLatestNotices(){
    	return mapper.getLatestNotices();
    }
}
