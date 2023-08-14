package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.community.entity.Notice;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface NoticeMapper extends GenericMapper<Notice, Integer> {

    public Notice getBySeq(int seq);

    public Notice getPrevNext(Map<String, Object> params);

    public List<Notice> getByFilter(Map<String, Object> params);

    public int insert(Notice notice);

    public int update(Notice notice);

    public int deleteById(int seq);
    
    public List<Notice> getByLimit();

    public List<Notice> getLatestNotices();


}
