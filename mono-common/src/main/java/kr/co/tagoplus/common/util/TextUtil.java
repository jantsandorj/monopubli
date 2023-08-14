package kr.co.tagoplus.common.util;

import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.fasterxml.jackson.databind.JsonNode;

import io.netty.util.internal.StringUtil;

public class TextUtil {

	private static Pattern emailRegex = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
	private static Pattern phoneRegex = Pattern.compile("^[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}$");
	
	public static String hideStringByTail(String text, int hideLength) {
		String result = "";
		if(text.length() <= hideLength) {
			hideLength = text.length();
		} else {
			result = text.substring(0, text.length() - hideLength);
		}
		
		for(int i = 0; i < hideLength; i++) {
			result += "*";
		}
		
		return result;
	}
	
	
	public static String cleanString(JsonNode node) {
		return cleanString(node, "");
	}
	
	public static String cleanString(JsonNode node, String defaultValue ) {
		String result = defaultValue;
		
		if(node != null) {
			result = node.asText(defaultValue);
		}
		
		return result;
	}
	
	public static String toString(Object input, String defaultValue) {
		String result = defaultValue;
		try {
			if(input != null) {
				result = String.valueOf(input);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	/**
	 * 
	 * @param phone a phone number
	 * @return digits only
	 */
	public static String cleanPhone(String phone) {
		if (phone == null) {
			return null;   
		}
		
		String digits = "";
		char[] phoneChars  = phone.toCharArray();
		
		for (int i = 0; i < phoneChars.length; i++) {
			if (Character.isDigit(phoneChars[i]) ) {
				digits += phoneChars[i];
			}
		}
		return digits;
	}
	
	/**
	 * 
	 * @param phone a digits only phone number
	 * @param format format, (use '#' for a digit)
	 * @return formatted phone number
	 */
	public static String separatePhone(String phone, String format) {
		if (phone == null || format == null) {
			return null;
		}
		
		String result = "";
		char[] formatChars = format.toCharArray();
	    char[] phoneChars = phone.toCharArray();
		int i = 0;
		int j = 0;
	    
		while (i < formatChars.length) {
			if (formatChars[i] != '#') {
				result += formatChars[i];
	    	} else if (j < phoneChars.length) {
	    		result += phoneChars[j++];
	    	}
			i += 1;
		}
	    return result;
	}
	
	/**
	 * 
	 * @param str the string
	 * @param ch  char to be checked in the string
	 * @return true if the string contains the char only once,
	 *         false otherwise
	 */
	public static boolean hasCharOnlyOnce(String str, char ch) {
		if (str == null) {
			return false;
		}
		
		char[] charArr = str.toCharArray();
		int count = 0;
		for (int i = 0; i < charArr.length; i++) {
			if (charArr[i] == ch) {
				count += 1;
			}
		}
		if (count == 1) {
			return true;
		} else {
			return false;
		}
	}

	public static String getExtensionWithDot(String fileName, String defaultResult) {
		if (fileName != null) {
			int i = fileName.lastIndexOf(".");
			if (i != -1 && i != fileName.length() - 1)
				return fileName.substring(i, fileName.length());
		}
		return defaultResult;
	}
	
	public static String getExtensionWithoutDot(String fileName, String defaultResult) {
		if (fileName != null) {
			int i = fileName.lastIndexOf(".");
			if (i != -1 && i != fileName.length() - 1)
				return fileName.substring(i + 1, fileName.length());
		}
		return defaultResult;
	}

	public static boolean isValidEmailOrPhone(String input) {
        return (isValidEmail(input) || isValidPhone(input));
	}

	public static boolean isValidEmail(String input) {
		Matcher matcher = emailRegex.matcher(input);
        return matcher.find();
	}
	
	public static boolean isValidPhoneByRegex(String input) {
		Matcher matcher = phoneRegex.matcher(input);
        return matcher.find();
	}

	public static boolean isValidPhone(String input) {
		String temp1;
		 String temp2;
		 String temp3;
		
		 String cell = input;
		 cell = cell.replace("-", "");		
		 
		 if(cell.length() < 10 || cell.length() > 11  || cell.charAt(0) != '0') return false;
		 
		 if(cell.length() == 10){	//전체 10자리 휴대폰 번호일 경우
			 temp1 = cell.substring(0,3);
			 temp2 = cell.substring(3,6);
			 temp3 = cell.substring(6,10);
		 }else{		//전체 11자리 휴대폰 번호일 경우
			 temp1 = cell.substring(0,3);
			 temp2 = cell.substring(3,7);
			 temp3 = cell.substring(7,11);
		 }
			 
		 return checkFormatCell(temp1, temp2, temp3);
	}
	
	/**
     * <p>XXX - XXX- XXXX 형식의 휴대폰번호 앞, 중간, 뒤 문자열 3개 입력 받아 유요한 휴대폰번호형식인지 검사.</p>
     * 
     * 
     * @param   휴대폰번호 문자열,(3개)
     * @return  유효한 휴대폰번호 형식인지 여부 (True/False)
     */
    public static boolean checkFormatCell(String cell1, String cell2, String cell3) {
	 String[] check = {"010", "011", "016", "017", "018", "019"}; //유효한 휴대폰 첫자리 번호 데이터
	 String temp = cell1 + cell2 + cell3;
	 
	 for(int i=0; i < temp.length(); i++){
    		if (temp.charAt(i) < '0' || temp.charAt(i) > '9') 
    			return false;    		
         }	//숫자가 아닌 값이 들어왔는지를 확인
	 		 
	 for(int i = 0; i < check.length; i++){
	     if(cell1.equals(check[i])) break;			 
	     if(i == check.length - 1) return false;
	 }	// 휴대폰 첫자리 번호입력의 유효성 체크
		 
	 if(cell2.charAt(0) == '0') return false;
		
	 if(cell2.length() != 3 && cell2.length() !=4) return false;
	 if(cell3.length() != 4) return false;
				 
	 return true;
    }

	public static int getRandNum(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }

	public static boolean isStringEqual(String s1, String s2) {
        if(!isEmptyString(s1) && !isEmptyString(s2)) {
            return s1.trim().toLowerCase().equals(s2.trim().toLowerCase());
        }
        return false;
    }

	public static boolean isEmptyString(String string) {
        return string == null || string.equals("") || string.trim().equals("");
    }
	
	public static boolean paramIsNullOrEmpty(Map.Entry<String, Object> param) {
		if(StringUtil.isNullOrEmpty(param.getKey()) || StringUtil.isNullOrEmpty((String) param.getValue()) || param.getKey().equals("timeStamp")) {
			return true;
		}
		return false;
	}
	
	/**
	 * 문자열을 지정한 분리자에 의해 배열로 리턴하는 메서드.
	 * @param source 원본 문자열
	 * @param separator 분리자
	 * @return result 분리자로 나뉘어진 문자열 배열
	 */
	public static String[] split(String source, String separator) throws NullPointerException {
		String[] returnVal = null;
		int cnt = 1;

		int index = source.indexOf(separator);
		int index0 = 0;
		while (index >= 0) {
			cnt++;
			index = source.indexOf(separator, index + 1);
		}
		returnVal = new String[cnt];
		cnt = 0;
		index = source.indexOf(separator);
		while (index >= 0) {
			returnVal[cnt] = source.substring(index0, index);
			index0 = index + 1;
			index = source.indexOf(separator, index + 1);
			cnt++;
		}
		returnVal[cnt] = source.substring(index0);

		return returnVal;
	}
	
	/**
	 * 원본 문자열의 포함된 특정 문자열을 새로운 문자열로 변환하는 메서드
	 * @param source 원본 문자열
	 * @param subject 원본 문자열에 포함된 특정 문자열
	 * @param object 변환할 문자열
	 * @return sb.toString() 새로운 문자열로 변환된 문자열
	 */
	public static String replace(String source, String subject, String object) {
		StringBuffer rtnStr = new StringBuffer();
		String preStr = "";
		String nextStr = source;
		String srcStr = source;

		while (srcStr.indexOf(subject) >= 0) {
			preStr = srcStr.substring(0, srcStr.indexOf(subject));
			nextStr = srcStr.substring(srcStr.indexOf(subject) + subject.length(), srcStr.length());
			srcStr = nextStr;
			rtnStr.append(preStr).append(object);
		}
		rtnStr.append(nextStr);
		
		return rtnStr.toString();
	}

	public static String removeHtmlTags(String string) {
		return string.replaceAll("\\<.*?>", "");
	}
}
