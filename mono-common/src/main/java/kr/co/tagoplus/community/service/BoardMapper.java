package kr.co.tagoplus.community.service;

import org.apache.ibatis.annotations.Mapper;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.community.entity.Board;

@Mapper
public interface BoardMapper extends GenericMapper<Board, Long> {
    public int insert(Board board);
    public int update(Board board);
    public int getAllCounts();
    public int getAllRegisteredBoardLastMonthCount(String validDate);
}