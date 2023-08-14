package kr.co.tagoplus.file.service;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.file.entity.FileDetail;
import kr.co.tagoplus.file.entity.FileGroup;


@Mapper
public interface FileMapper extends GenericMapper<FileDetail, Long> {

	public FileDetail getSimpleById(String fileId);
	public FileDetail getByUrl(String url);
	public List<FileDetail> getByGroupId(long fileGrpId);

	public int insert(FileDetail fileDetail);
	public int updateDownCnt(long fileId);
	
	public int createFileGroup(FileGroup fileGroup);
	public FileGroup getFileGroupById(long fileGrpId);	
	
}
