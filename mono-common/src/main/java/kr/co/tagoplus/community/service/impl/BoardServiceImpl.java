package kr.co.tagoplus.community.service.impl;

import kr.co.tagoplus.common.util.DateUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.community.entity.Board;
import kr.co.tagoplus.community.service.BoardMapper;
import kr.co.tagoplus.community.service.BoardService;

import java.util.Calendar;
import java.util.Date;

@Service
@Transactional("transactionManager")
public class BoardServiceImpl extends AbstractGenericServiceImpl<Board, Long> implements BoardService {
	protected static Logger logger = LoggerFactory.getLogger(BoardServiceImpl.class);
	
	@Autowired
	private BoardMapper mapper;
	
	@Override
	public GenericMapper<Board, Long> getMapper() {
		return mapper;
	}

	@Override
	public int getAllCounts() {
		return mapper.getAllCounts();
	}

	@Override
	public int getAllRegisteredBoardLastMonthCount() {
		String validDate = "";
		Date currentDate = new Date();

		Calendar cal = Calendar.getInstance();
		cal.setTime(currentDate);
		cal.add(Calendar.MONTH, -1);
		Date newDate = cal.getTime();
		validDate = DateUtil.convertFromDate(newDate, "yyyy-MM-dd HH:mm:ss");

		return mapper.getAllRegisteredBoardLastMonthCount(validDate);
	}
}