package kr.co.tagoplus.community.service;

import java.util.List;
import java.util.Map;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.community.entity.Notice;

public interface NoticeService extends GenericService<Notice, Integer> {

    public Notice getBySeq(int seq);

    public Notice getPrevNext(Map<String, Object> params);

    public int update(Notice notice);
    
    public List<Notice> getByLimit();

    public List<Notice> getLatestNotices();

}
