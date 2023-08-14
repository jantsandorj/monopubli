package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.community.entity.Qna;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface QnaMapper extends GenericMapper<Qna, Integer> {

    public List<Qna> getByFilter(Map<String, Object> params);

    public List<Qna> getLatestQnas();

    public Qna getBySeq(int seq);

    public int insert(Qna qna);

    public int update(Qna qna);

    public int deleteBySeq(int seq);

    public int updateViewCount(int seq);

}
