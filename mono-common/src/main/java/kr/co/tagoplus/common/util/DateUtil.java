package kr.co.tagoplus.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.ResolverStyle;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Pattern;

public class DateUtil {

	public static final long SEC_FIFTEEN 	= 15000;
	public static final long MIN_TEN 		= 600000;
	public static final long MIN_FIFTEEN 	= 900000;
	public static final long MIN_THIRTY 	= 1800000;
	public static final long MIN_FORTYFIVE 	= 2700000;
	public static final long HOUR_ONE 		= 3600000;
	public static final long HOUR_TWO		= 7200000;

	public static final String SIMPLE_YEAR 		= "yy";
	public static final String COMPACT_TIME 	= "HH:mm";
	public static final String POINTED_DATE 	= "yyyy.MM.dd";
	public static final String COMPACT_DATE 	= "yyyyMMdd";
	public static final String SIMPLE_DATE 		= "yyyy-MM-dd";
	public static final String COMPACT_TIMESTAMP= "yyyyMMddHHmmss";
	public static final String DB_TIMESTAMP 	= "yyyy-MM-dd HH:mm:ss";
	public static final String DB_NOSEC_TIMESTAMP 	= "yyyy-MM-dd HH:mm";
	
	public static String changeDateFormat(String date, String inputFormat, String outputFormat) {
    	SimpleDateFormat parser = new SimpleDateFormat(inputFormat);
    	SimpleDateFormat formatter = new SimpleDateFormat(outputFormat);
    	
    	Date newDate;
		try {
			newDate = parser.parse(date);
		} catch (ParseException e) {
			return date;
		}
    	
    	return formatter.format(newDate);
	}
	
	/** yyyy.MM.dd */
	public static String getCurrentDateAsPointed() {
		Date now = new Date();
    	SimpleDateFormat formatter = new SimpleDateFormat(POINTED_DATE);
    	
    	return formatter.format(now);
	}
	
	/** yyyyMMdd */
	public static String getCurrentDateAsCompact() {
    	SimpleDateFormat formatter = new SimpleDateFormat(COMPACT_DATE);
    	
    	return formatter.format(new Date());
	}
	
	/**yyyy-MM-dd  */
    public static String getCurrentDateAsSimpleString() {
    	SimpleDateFormat formatter = new SimpleDateFormat(SIMPLE_DATE);
    	
        return formatter.format(new Date());
    }
	
	/** yyyyMMddHHmmss */
	public static String getTimestampAsCompact() {
		Date now = new Date();
    	SimpleDateFormat formatter = new SimpleDateFormat(COMPACT_TIMESTAMP);
    	
    	return formatter.format(now);
	}
	
	public static String convertFromDate(Date date, String format) {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
    	
        return formatter.format(date);
	}
	
	/** yyyyMMddHHmmss : NOW + delayedMinutes */
	public static String getDelayedTimestampAsCompact(int delayedMinutes) {
		Calendar now = Calendar.getInstance();
		now.add(Calendar.MINUTE, delayedMinutes);
    	SimpleDateFormat formatter = new SimpleDateFormat(COMPACT_TIMESTAMP);
    	
    	return formatter.format(now.getTime());
	}
	
	
	public static Date getDelayedDate(int delayUnit, int delay) {
		Calendar now = Calendar.getInstance();
		now.add(delayUnit, delay);
    	
    	return now.getTime();
	}
	
	/** yyyyMMddHHmmss : NOW - minuteAgo */
	public static String getEarlierTimestampAsCompact(int minuteAgo) {
		if(minuteAgo > 0) {
			minuteAgo = minuteAgo * -1;
		}
		
		Calendar now = Calendar.getInstance();
		now.add(Calendar.MINUTE, minuteAgo);
    	SimpleDateFormat formatter = new SimpleDateFormat(COMPACT_TIMESTAMP);
    	
    	return formatter.format(now.getTime());
	}
	
	/** yyyy-MM-dd HH:mm:ss */
	public static String getCurrentTimestamp() {
		Date now = new Date();
    	SimpleDateFormat formatter = new SimpleDateFormat(DB_TIMESTAMP);
    	
    	return formatter.format(now);
	}
	
	/** yyyy-MM-dd HH:mm:ss */
	public static String convertFromTimestamp(long timestamp) {
    	SimpleDateFormat formatter = new SimpleDateFormat(DB_TIMESTAMP);
//    	formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
    	
    	return formatter.format(new Date(timestamp));
	}

	/** yy */
	public static String getSimpleYear() {
		Date now = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat(SIMPLE_YEAR);

		return formatter.format(now);
	}
	
	public static Date convertToTimestamp(String timestamp) {
		return convertToTimestampByFormat(timestamp, DB_TIMESTAMP);
	}
	
	public static Date convertToTimestamp(String date, String time) {
		return convertToTimestampByFormat(date, time, DB_TIMESTAMP);
	}
	
	public static Date convertToTimestampByFormat(String timestamp, String format) {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		Date result = new Date();
		
		try {
			result = formatter.parse(timestamp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static Date convertToTimestampByFormat(String date, String time, String format) {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		Date result = null;
		String timestamp = getCurrentTimestamp();
		
		if(isValidDate(date) && isValidTime(time)) {
			timestamp = date + " " + time;
		}
		
		try {
			result = formatter.parse(timestamp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	public static String extractTime(String timestamp) {
		
		try {
			String[] split = timestamp.split(Pattern.quote(" "));
			String[] units = {};
			if (split.length > 1) {
				timestamp = split[1];
				units = timestamp.split(Pattern.quote(":"));
			}
			
			if(units.length > 1) {
				timestamp = units[0] + ":" + units[1];
			} else {
				timestamp = "00:00";
			}
		} catch(Exception e) {
			e.printStackTrace();;
		}
		
		return timestamp;
	}
	
	public static boolean isValidDate(String date, String format) {
		SimpleDateFormat formatter = new SimpleDateFormat(format);
		formatter.setLenient(false);
		
		try {
			formatter.parse(date);
		} catch (Exception e) {
			return false;
		}
		
		return true;
	}
	
	public static boolean isValidDate(String date) {
		return isValidDate(date, POINTED_DATE);
	}
	
	public static boolean isValidTime(String time, String format) {
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format)
		            .withResolverStyle(ResolverStyle.STRICT);
		 
		 try {
			 LocalTime.parse(time, formatter);
		 } catch (Exception e) {
			return false;
		}
		 
		return true;
	}
	
	public static boolean isValidTime(String time) {
		 return isValidTime(time, COMPACT_TIME);
	}

	public static boolean isDateExpired(String expireAt, String compactTimestamp) {
		try {
			return new SimpleDateFormat(compactTimestamp).parse(expireAt).before(new Date());
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
		return true;
	}
	
	public static String remainingDate(String scheduledDate) {

	    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
	    Date currentDate = new Date();
	    
	    long remainingDay = 0;
		try {
			Date endDate = format.parse(scheduledDate);
			remainingDay = ((endDate.getTime() - currentDate.getTime())/ (1000 * 60 * 60 * 24));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	    
	    if(remainingDay <=0) {
	    	return "0";
	    }else {
	    	return Long.toString(remainingDay);
	    }
	}
}
