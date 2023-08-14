package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.community.entity.Qna;

import java.util.List;

public interface QnaService extends GenericService<Qna, Integer> {

    public int insert(Qna qna);

    public Qna getBySeq(int seq);

    public int deleteBySeq(int seq);

    public int updateViewCount(int seq);

    public List<Qna> getLatestQnas();

}
