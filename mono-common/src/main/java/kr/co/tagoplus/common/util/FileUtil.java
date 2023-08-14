package kr.co.tagoplus.common.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import kr.co.tagoplus.common.helper.EgovResourceCloseHelper;
import kr.co.tagoplus.file.entity.FileDetail;

/**
 *  Class Name : FileUtil.java
 *  Description : implementation of EgovFileCmprs
 * 
 *  to compress list of files.
 */
public class FileUtil extends EgovFileCmprs {
	private static final Logger logger = LoggerFactory.getLogger(FileUtil.class);

	final static  int COMPRESSION_LEVEL = 8;
	final static  int BUFFER_SIZE = 64 * 1024;
	final static  char FILE_SEPARATOR = File.separatorChar;
	
	/**
	 * Compress List<FileVO> files.
	 * First find files from "source" and create temp file from source files
	 * using List<FileVO> for real attachment file name and extension.
	 * 
	 * zip all temp files and remove temp files.
	 * 
	 * @param List<FileVO> list of FileVO 
	 * @param String source 원본 directory
	 * @param String target 압축파일명
	 * @return boolean result
	 * @exception Exception
	*/
	public static boolean compressListOfFileVO(List<FileDetail> fileList, String source, String target) throws Exception {
		if(fileList == null || fileList.isEmpty()) {
			return false;
		}
		
		boolean result = false;
		int cnt = 0;
		// 읽어들일 byte 버퍼
		byte[] buffer = new byte[BUFFER_SIZE];
		List<String> tempFileList = new ArrayList<>();

		FileInputStream fileInput = null;
		FileOutputStream fileOutput = null;
		ZipOutputStream zipOutput = null;
		ZipEntry zipEntry = null;
		
		String sourceClean = source.replace('\\', FILE_SEPARATOR).replace('/', FILE_SEPARATOR);
		String targetClean = target.replace('\\', FILE_SEPARATOR).replace('/', FILE_SEPARATOR);
		
		String targetMap = EgovFileTool.createNewFile(targetClean);
		File targetFile = new File(targetMap);
		File sourceFile = new File(sourceClean);
		
		try {
			fileOutput = new FileOutputStream(targetFile);
			zipOutput = new ZipOutputStream((OutputStream) fileOutput);
			File[] fileArr = sourceFile.listFiles();
			List<String> list = EgovFileTool.getSubFilesByAll(fileArr);
			
			for (int i = 0; i < list.size(); i++) {
				String filename = "";
				
				//create temp files
				for(FileDetail file : fileList) {
					if(list.get(i).toString().endsWith(file.getStoredNm())) {
						filename = TextUtil.replace(list.get(i), file.getStoredNm(), file.getFileNm());
						
						if(tempFileList.contains(filename)) {
							String[] tempRename = filename.split(Pattern.quote("."));
							
							if(tempRename.length >= 2) {
								filename = tempRename[0] + "_" +  DateUtil.getTimestampAsCompact() + "." + tempRename[1];
							}
						}
							
						EgovFileTool.copyFile(list.get(i), filename);
					}
				}
				
				File renamedFile = new File(filename);
				if(!renamedFile.exists()) {
					continue;
				}
				fileInput = new FileInputStream(renamedFile);
				zipEntry = new ZipEntry(renamedFile.getName());
				
				zipOutput.putNextEntry(zipEntry);
				zipOutput.setLevel(COMPRESSION_LEVEL);
				cnt = 0;
				while ((cnt = fileInput.read(buffer)) != -1) {
					zipOutput.write(buffer, 0, cnt);
				}
				
				tempFileList.add(filename);
			}
			zipOutput.closeEntry();
		} catch (Exception e) {
			if(targetFile.delete()) {
				logger.debug("[file.delete] tarFile : File Deletion Success");
			} else{						
				logger.error("[file.delete] tarFile : File Deletion Fail");
			}
			throw e;
		} finally {
			EgovResourceCloseHelper.close(fileInput, zipOutput, fileOutput);
			
			for(String file : tempFileList) {
				EgovFileTool.deleteFile(file);
			}
		}
		
		return result;
	}
	
	public static boolean prepareZipFolder(List<FileDetail> files, String target) {
		boolean result = true;
		String originalFile = "";
		String targetFile = "";
		
		try {
			for(FileDetail file : files) {
				originalFile = file.getStoredPath() + File.separator + file.getStoredNm();
				targetFile = target + File.separator + file.getFileNm();
				
				EgovFileTool.copyFile(originalFile, targetFile);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return result;
	}
	
	public static long countFilesInDirectory(String dir) throws IOException {
		return Files.walk(Paths.get(dir))
					.parallel()
					.filter(p -> !p.toFile().isDirectory())
					.count();
	}
	
	public static String getJsonOfAttachment(List<FileDetail> list) {
		if(list == null || list.isEmpty()) {
			return "";
		}
		
		List<Map<String, String>> fileList = new ArrayList<>();
		Map<String, String> fileInfo = new HashMap<String, String>();
		for (int i = 0; i < list.size(); i++) {
			fileInfo = generateAttachmentInfo(list.get(i), i);
			fileList.add(fileInfo);
			
			fileInfo = new HashMap<String, String>();
		}
		
		Gson gson = new Gson();
		return gson.toJson(fileList);
	}
	
	public static String getJsonOfMergedAttachment(String oldList, List<FileDetail> list) {
		if(list == null || list.isEmpty()) {
			return oldList;
		}

		Gson gson = new Gson();
		Type listType = new TypeToken<List<Map<String, String>>>(){}.getType();
		List<Map<String, String>> mappedList = gson.fromJson(oldList, listType);
		
		Map<String, String> fileInfo = new HashMap<String, String>();
		for (int i = 0; i < list.size(); i++) {
			fileInfo = generateAttachmentInfo(list.get(i), i);
			mappedList.add(fileInfo);
			
			fileInfo = new HashMap<String, String>();
		}
		
		return gson.toJson(mappedList); 
	}
	
	public static Map<String, String> generateAttachmentInfo(FileDetail fileVO, int index) {
		Map<String, String> result = new HashMap<String, String>();
		
		result.put("fileNm", fileVO.getFileNm());
		result.put("storedNm", fileVO.getStoredNm());
		result.put("url", fileVO.getUrl());
		result.put("fileSize", String.valueOf(fileVO.getFileSize()));
		result.put("fileExt", fileVO.getFileExt());
		result.put("path", fileVO.getStoredPath());
		result.put("downloadUrl", fileVO.getDownloadUrl());
		result.put("deleteUrl", fileVO.getDeleteUrl());
		result.put("result", String.valueOf(index)); 
		
		return result;
	}
}
