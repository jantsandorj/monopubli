package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.community.entity.FreeBoard;

public interface FreeBoardService extends GenericService<FreeBoard, Integer> {
    public FreeBoard getBySeq(int seq);

    public int update(FreeBoard freeBoard);

}
