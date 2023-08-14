package kr.co.tagoplus.file.service;

import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.file.entity.FileDetail;
import kr.co.tagoplus.file.entity.FileForm;
import kr.co.tagoplus.file.entity.FileGroup;

public interface FileService extends GenericService<FileDetail, Long> {

	public long generateFileGroup();
	public FileGroup createFileGroup();
	public FileGroup getFileGroupById(long fileGrpId);	
	
	public FileDetail storeFile(FileForm fileForm);
	public FileDetail storeFile(MultipartFile file);
	public FileDetail storeFile(MultipartFile file, String subDirectory);
	public FileDetail fileStore(MultipartFile file, String subDirectory, long fileGroupId);
	public void storeFile(List<MultipartFile> fileList, String subDirectory, long fileGroupId);
	
	public Resource loadFileAsResource(String fileName);
	
	public FileDetail getByUrl(String string);
	public List<FileDetail> getByGroupId(long fileGrpId);
	
	public int updateDownCnt(long fileId);
	public boolean deleteFile(long id);
	public boolean deleteByFileGroup(long fileGrpId);
}
