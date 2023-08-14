/**
 *
 */
package kr.co.tagoplus.common.util;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;

import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.security.spec.AlgorithmParameterSpec;

/**
 * @author Tim
 *
 *         encrypt and decrypt are used between API and FRONT-END
 *         FRONT-END has javascript implementation of encrypt9
 */
@Component
public class Encryptor {
	protected static Logger logger = LoggerFactory.getLogger(Encryptor.class);
	
	private static String key;
	private static int ivSize;

	@Value("${encrypt.key}")
	public void setKey(String key) {
		Encryptor.key = key;
	}

	@Value("${encrypt.iv.size}")
	public static void setIvSize(int ivSize) {
		Encryptor.ivSize = ivSize;
	}
	
	public static String getKey() {
		return key;
	}
	
	public static int getIvSize() {
		return ivSize;
	}

	private static byte[] hexStringToByteArray(String s) {
		int len = s.length();
		byte[] data = new byte[len / 2];
		for (int i = 0; i < len; i += 2) {
			data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4) + Character.digit(s.charAt(i + 1), 16));
		}
		return data;
	}

	private final static char[] hexArray = "0123456789abcdef".toCharArray();

	private static String bytesToHex(byte[] bytes) {
		char[] hexChars = new char[bytes.length * 2];
		for (int j = 0; j < bytes.length; j++) {
			int v = bytes[j] & 0xFF;
			hexChars[j * 2] = hexArray[v >>> 4];
			hexChars[j * 2 + 1] = hexArray[v & 0x0F];
		}
		return new String(hexChars);
	}

	public static String hex(byte[] bytes) {
		return Hex.encodeHexString(bytes);
	}

	public static byte[] hex(String str) {
		try {
			return Hex.decodeHex(str.toCharArray());
		} catch (DecoderException e) {
			throw new IllegalStateException(e);
		}
	}

	public static String encrypt(String msg) throws Exception {

		// Generating IV.
		int ivSize = CommonConstant.Encrypt.IV_SIZE;
		String pass = CommonConstant.Encrypt.KEY;

		byte[] iv = new byte[ivSize];
		SecureRandom random = new SecureRandom();
		random.nextBytes(iv);
		AlgorithmParameterSpec ivParameterSpec = new IvParameterSpec(iv);
		MessageDigest digest = MessageDigest.getInstance("SHA-256");
		digest.update(pass.getBytes("UTF-8"));
		byte[] keyBytes = new byte[32];
		System.arraycopy(digest.digest(), 0, keyBytes, 0, keyBytes.length);
		SecretKeySpec secretKeySpec = new SecretKeySpec(keyBytes, "AES");

		// Encrypt.
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);
		byte[] encrypted = cipher.doFinal(msg.getBytes("UTF-8"));

		String ReturnEncryptedString = bytesToHex(iv) + Base64.encodeBase64String(encrypted);
		return ReturnEncryptedString;
	}

	public static String decrypt(String encryptedBase64String) throws Exception {

		//System.out.println("encryptedString: " + encryptedBase64String);
		if (encryptedBase64String == null) {
			System.out.println("base64string is null");
		}
		int ivSize = CommonConstant.Encrypt.IV_SIZE;
		String pass = CommonConstant.Encrypt.KEY;

		String encrypted = encryptedBase64String.substring(32);
		//System.out.println("encrypted->"+ encrypted);

		// Extract IV.
		byte[] iv = new byte[ivSize];
		iv = hexStringToByteArray(encryptedBase64String.substring(0, 32));
		//System.out.println("iv->"+encryptedBase64String.substring(0, 32));

		AlgorithmParameterSpec ivParameterSpec = new IvParameterSpec(iv);

		MessageDigest digest = MessageDigest.getInstance("SHA-256");
		digest.update(pass.getBytes("UTF-8"));
		byte[] keyBytes = new byte[32];
		System.arraycopy(digest.digest(), 0, keyBytes, 0, keyBytes.length);
		SecretKeySpec secretKeySpec = new SecretKeySpec(keyBytes, "AES");

		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
		cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParameterSpec);

		byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));

		//System.out.println(iv + " ::::: Decrypt ::::: " + encrypted);
		return new String(original);
	}
}