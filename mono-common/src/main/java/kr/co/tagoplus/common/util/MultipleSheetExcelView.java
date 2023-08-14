package kr.co.tagoplus.common.util;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.web.servlet.view.document.AbstractXlsxView;

public class MultipleSheetExcelView extends AbstractXlsxView {

	@Override
	protected void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String filename = URLEncoder.encode(model.get("filename").toString(),"UTF-8");
		String disposition = "attachment; filename=\"" + filename + "\"";
		response.setHeader("Content-Disposition", disposition);
		 response.setCharacterEncoding("UTF-8");
		
		 List<HashMap<String, Object>> excelList = (List<HashMap<String, Object>>) model.get("excel");
		 
		 for(int j = 0; j < excelList.size(); j++) {
			@SuppressWarnings("unchecked")
			List<Map<Integer, String>> rows = (List<Map<Integer, String>>) excelList.get(j).get("rows");
			
			@SuppressWarnings("unchecked")
			Map<Integer, String> headers = (Map<Integer, String>) excelList.get(j).get("headers");
			
			//create header excel style
			CellStyle headerStyle = workbook.createCellStyle();
	        headerStyle.setBorderRight(BorderStyle.THIN);
	        headerStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
	        headerStyle.setBorderBottom(BorderStyle.THIN);
	        headerStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
	        headerStyle.setBorderLeft(BorderStyle.THIN);
	        headerStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
	        headerStyle.setBorderTop(BorderStyle.THIN);
	        headerStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
	        headerStyle.setAlignment(HorizontalAlignment.CENTER);

	        Font headerFont = workbook.createFont();
	        headerFont.setBold(true);
	        headerStyle.setFont(headerFont);
	        
	        // create excel xls sheet
	        Sheet sheet = workbook.createSheet( (String) excelList.get(j).get("sheetName"));

	        Row titleRow = sheet.createRow(0);
	        String title = (String) excelList.get(j).get("title");
	        for (Map.Entry<Integer, String> entry : headers.entrySet()) {
	        	Cell titleCell = titleRow.createCell(entry.getKey());
	        	if(entry.getKey() == 0) {
	        		titleCell.setCellValue(title);
	        	}
	        	titleCell.setCellStyle(headerStyle);
	        }
	        
	        for(int i = 1; i < headers.size(); i++) {
	        	sheet.autoSizeColumn(i);
	        }
	        
	        sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, headers.size() - 1));
	        
	        // create header row
	        int headerPosition = 1;
	        Row header = sheet.createRow(headerPosition);
	        for (Map.Entry<Integer, String> entry : headers.entrySet()) {
	        	Cell headerCell = header.createCell(entry.getKey());
	        	headerCell.setCellValue(entry.getValue());
	        	headerCell.setCellStyle(headerStyle);
	        }

	        CellStyle rowStyle = workbook.createCellStyle();
	        rowStyle.setBorderRight(BorderStyle.THIN);
	        rowStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
	        rowStyle.setBorderBottom(BorderStyle.THIN);
	        rowStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
	        rowStyle.setBorderLeft(BorderStyle.THIN);
	        rowStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
	        rowStyle.setBorderTop(BorderStyle.THIN);
	        rowStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());

	        Font rowFont = workbook.createFont();
	        rowFont.setBold(false);
	        rowStyle.setFont(rowFont);
	        // Create data cells
	        int rowCount = headerPosition + 1;
	        for (Map<Integer, String> row : rows){
	            Row courseRow = sheet.createRow(rowCount++);
	            for (Map.Entry<Integer, String> cell : row.entrySet()) {
	            	String cellValue = "";
	            	if(cell.getValue() != null && !cell.getValue().equals("null")) {
	            		cellValue = cell.getValue();
	            	}
	            	Cell rowCell = courseRow.createCell(cell.getKey());
	            	rowCell.setCellValue(cellValue);
	            	rowCell.setCellStyle(rowStyle);
	            }
	        }
		 }
	}
}
