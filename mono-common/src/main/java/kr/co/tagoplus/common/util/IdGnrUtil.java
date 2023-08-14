package kr.co.tagoplus.common.util;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import kr.co.tagoplus.common.service.IdGnrService;

@Component(value = "idGnrUtil")
public class IdGnrUtil {

	public static final String DEFAULT_PREFIX 	= "TMP";
	public static final int DEFAULT_PADDING_SIZE = 5;
	
	@Autowired
	private IdGnrService idGnrService;

	public String nextTempCustomerId() {
		return getNextId("CUSTOMER_TEMP", DEFAULT_PREFIX, 4);
	}
	
	public String nextApprovedCustomerId(String prefix) {
		return getNextId("CUSTOMER_ID", prefix, 4);
	}

	public String nextTestReceiptId(String prefix) {
		String receiptId = "";
		String simpleYear = DateUtil.getSimpleYear();
		String nextId = getNextId("RECEIPT_ID_" + simpleYear, 4);

		receiptId = prefix + simpleYear + nextId;
		return receiptId;
	}
	
	public long getNextId(String tableName) {
		return idGnrService.getIdIndex(tableName);
	}

	public String getNextId(String tableName, int padding) {
		return getZeroPadding(tableName, padding);
	}

	public String getNextId(String tableName, String prefix, int padding) {
		if(StringUtils.isBlank(prefix)) {
			prefix = DEFAULT_PREFIX;
		}
		
		return prefix + getZeroPadding(tableName, padding);
	}
	
	public String getZeroPadding(String tableName, int padding) {
    	long nextId = getNextId(tableName);
		
		return getZeroPadding(nextId, padding);
	}
	
	public String getZeroPadding(long number, int padding) {
    	String result = String.valueOf(number);
		
		return StringUtils.leftPad(result, padding, "0");
	}
	
	
}
