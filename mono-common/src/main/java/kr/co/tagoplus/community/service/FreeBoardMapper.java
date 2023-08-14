package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.community.entity.FreeBoard;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface FreeBoardMapper extends GenericMapper<FreeBoard, Integer> {
    public FreeBoard getBySeq(int seq);

    public List<FreeBoard> getByFilter(Map<String, Object> params);

    public int insert(FreeBoard freeBoard);

    public int update(FreeBoard freeBoard);

    public int deleteById(int seq);
}
