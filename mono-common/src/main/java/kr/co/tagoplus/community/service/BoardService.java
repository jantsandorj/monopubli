package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.community.entity.Board;

public interface BoardService extends GenericService<Board, Long> {

    public int getAllCounts();
    public int getAllRegisteredBoardLastMonthCount();
}