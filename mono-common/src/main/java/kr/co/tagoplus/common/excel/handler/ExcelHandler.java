package kr.co.tagoplus.common.excel.handler;

import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.functions.T;

public interface ExcelHandler<T> {
	Map<Integer, String> mapHeader();
	List<Map<Integer, String>> mapRow(List<T> list);
}
