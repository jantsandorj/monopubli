package kr.co.tagoplus.file.service.impl;

import java.io.IOException;
import java.lang.reflect.Type;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.common.util.FileConfiguration;
import kr.co.tagoplus.common.util.RandomString;
import kr.co.tagoplus.common.util.TextUtil;
import kr.co.tagoplus.file.entity.FileDetail;
import kr.co.tagoplus.file.entity.FileForm;
import kr.co.tagoplus.file.entity.FileGroup;
import kr.co.tagoplus.file.entity.FileStorageException;
import kr.co.tagoplus.file.service.FileMapper;
import kr.co.tagoplus.file.service.FileService;

/**
 * @author Tim
 * 
 * @desc CRUD is implemente in AbstractGenericServiceImpl
 * 			additional service methods are implemented here.	
 */
@Service
@Transactional("transactionManager")
@ConfigurationProperties("application.properties")
public class FileServiceImpl extends AbstractGenericServiceImpl<FileDetail, Long> implements FileService {
	private static final Logger logger = LoggerFactory.getLogger(FileServiceImpl.class);
	
	private static final String BASE_DOWNLOAD_PATH = "/files/download/";
	private static final String BASE_DELETE_PATH = "/api/files/";
	
	@Autowired
	private FileMapper mapper;
	
	private FileConfiguration config;
	
	@Override
	public GenericMapper<FileDetail, Long> getMapper() {
		return mapper;
	}
	
	private final Path fileStorageBasePath;
	
	@Autowired
    public FileServiceImpl(FileConfiguration config) {
		this.config = config;
		this.fileStorageBasePath = Paths.get(config.getBasePath()).toAbsolutePath().normalize();

		try {
			Files.createDirectories(this.fileStorageBasePath);
		} catch (Exception ex) {
			throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
		}
	}

	@Override
	public FileDetail storeFile(FileForm fileForm) {
		return this.fileStore(fileForm, this.fileStorageBasePath, BASE_DOWNLOAD_PATH);
	}

	@Override
	public FileDetail storeFile(MultipartFile file) {
		return this.storeFile(new FileForm(file, ""));
	}
	
	@Override
	public FileDetail storeFile(MultipartFile file, String subDirectory) {
		return this.storeFile(new FileForm(file, subDirectory));
	}
	
	private FileDetail fileStore(FileForm fileForm, Path path, String downloadBasePath){
		if(fileForm.getFile() == null) {
			logger.error("Could not store file. Please try again!");
			return null;
		}
		
		String originalFilename = StringUtils.cleanPath(fileForm.getFile().getOriginalFilename());
		String storedFilename = new RandomString(8, ThreadLocalRandom.current()).nextString() + TextUtil.getExtensionWithDot(originalFilename, "");
		
		String extension = TextUtil.getExtensionWithoutDot(originalFilename, "");
		if(config.getBanList().contains(extension)) {
			return null;
		}
		// Normalize file name
    	FileDetail fileDetail = new FileDetail();
		MultipartFile file = fileForm.getFile();
		
        try {
            // Check if the file's name contains invalid characters
            if(originalFilename.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + originalFilename);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            path = path.resolve(fileForm.getSubDirectory());
            Files.createDirectories(path.toAbsolutePath());
            Path targetLocation = path.resolve(storedFilename);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            
			/* FileDetail object prepare start */
            String subDirectory = fileForm.getSubDirectory();
            if(!subDirectory.endsWith("/")) {
            	subDirectory = subDirectory + "/";
            }
            String storedFilenameUri = downloadBasePath + subDirectory + storedFilename;
    	    fileDetail.setFileNm(originalFilename);
    	    fileDetail.setStoredNm(storedFilename);
    	    fileDetail.setUrl(storedFilenameUri);
    	    fileDetail.setFileSize(file.getSize());
    	    fileDetail.setFileExt(extension);
    	    fileDetail.setStoredPath(targetLocation.toString());
			/* FileDetail object prepare end */
    	    
    	    mapper.insert(fileDetail);

    	    fileDetail.setDownloadUrl(downloadBasePath + fileDetail.getFileSeq());
    	    fileDetail.setDeleteUrl(BASE_DELETE_PATH + fileDetail.getFileSeq() + "/delete");
    	    mapper.update(fileDetail);
    	    
    	    return fileDetail;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + originalFilename + ". Please try again!", ex);
        } catch (Exception e) {
			e.printStackTrace();
			throw new FileStorageException("Could not store file " + originalFilename + ". Please try again!", e);
		}
	}
	
	public FileDetail fileStore(MultipartFile file, String subDirectory, long fileGroupId) {
		if(file == null || file.isEmpty() || file.getSize() == 0) {
			logger.error("Could not store file. Please try again!");
			return null;
		}
		
		String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());
		String storedFilename = new RandomString(8, ThreadLocalRandom.current()).nextString() + TextUtil.getExtensionWithDot(originalFilename, "");
		
		String extension = TextUtil.getExtensionWithoutDot(originalFilename, "");
		if(config.getBanList().contains(extension)) {
			return null;
		}
		// Normalize file name
    	FileDetail fileDetail = new FileDetail();
		
        try {
            // Check if the file's name contains invalid characters
            if(originalFilename.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + originalFilename);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path path = this.fileStorageBasePath.resolve(subDirectory);
            path = path.resolve(String.valueOf(fileGroupId));
            
            Files.createDirectories(path.toAbsolutePath());
            Path targetLocation = path.resolve(storedFilename);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            
			/* FileDetail object prepare start */
            if(!subDirectory.endsWith("/")) {
            	subDirectory = subDirectory + "/";
            }
            String storedFilenameUri = BASE_DOWNLOAD_PATH + subDirectory + storedFilename;
            fileDetail.setFileGrpId(fileGroupId);
    	    fileDetail.setFileNm(originalFilename);
    	    fileDetail.setStoredNm(storedFilename);
    	    fileDetail.setUrl(storedFilenameUri);
    	    fileDetail.setFileSize(file.getSize());
    	    fileDetail.setFileExt(extension);
    	    fileDetail.setStoredPath(subDirectory + fileGroupId + "/" + storedFilename);
			/* FileDetail object prepare end */
    	    
    	    mapper.insert(fileDetail);
    	    
    	    fileDetail.setDownloadUrl(BASE_DOWNLOAD_PATH + fileDetail.getFileSeq());
    	    fileDetail.setDeleteUrl(BASE_DELETE_PATH + fileDetail.getFileSeq() + "/delete");
    	    mapper.update(fileDetail);
    	    
    	    return fileDetail;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + originalFilename + ". Please try again!", ex);
        } catch (Exception e) {
			e.printStackTrace();
			throw new FileStorageException("Could not store file " + originalFilename + ". Please try again!", e);
		}
	}

	@Override
	public void storeFile(List<MultipartFile> fileList, String subDirectory, long fileGroupId) {
		if(fileList != null && !fileList.isEmpty()) {
			for(MultipartFile file : fileList) {
				fileStore(file, subDirectory, fileGroupId);
			}
		}
	}

	@Override
    public Resource loadFileAsResource(String fileName) {
		return this.loadFile(this.fileStorageBasePath, fileName);
	}

	private Resource loadFile(Path path, String fileName) {
		try {
            Path filePath = path.resolve((path + "/" + fileName).replaceAll("\\\\", "/")).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if(resource.exists()) {
                return resource;
            } else {
                throw new FileStorageException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new FileStorageException("File not found " + fileName, ex);
        }
	}

	@Override
	public boolean deleteFile(long id) {
		FileDetail file = getById(id);
		if(file != null) {
			mapper.deleteById(file.getFileSeq());
			Path filePath = this.fileStorageBasePath.resolve(file.getStoredPath());
			try {
				Files.deleteIfExists(filePath);
			} catch (IOException e) {
				e.printStackTrace();
			}
			return true;
		}
		return false;
	}
	
	@Override
	public boolean deleteByFileGroup(long fileGrpId) {
		List<FileDetail> files = mapper.getByGroupId(fileGrpId);
		if(files != null && !files.isEmpty()) {
			for(int i=0; i<files.size(); i++) {
				mapper.deleteById(files.get(i).getFileSeq());
				Path filePath = this.fileStorageBasePath.resolve(files.get(i).getStoredPath());
				try {
					Files.deleteIfExists(filePath);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			return true;
		}
		return false;
	}

	@Override
	public FileDetail getByUrl(String url) {
		return mapper.getByUrl(url);
	}
	
	public List<FileDetail> getJsonOfAttachment(String list) {
		if(list == null || list.isEmpty()) {
			return null;
		}

		Gson gson = new Gson();
		Type listType = new TypeToken<List<Map<String, String>>>(){}.getType();
		List<Map<String, String>> mappedList = gson.fromJson(list, listType);
		List<FileDetail> listOfFile = new ArrayList<FileDetail>();
		FileDetail fileInfo = new FileDetail();
		for (int i = 0; i < mappedList.size(); i++) {
			fileInfo = generateAttachmentFile(mappedList.get(i), i);
			listOfFile.add(fileInfo);
			fileInfo = new FileDetail();
		}
		
		return listOfFile; 
	}
	
	public FileDetail generateAttachmentFile(Map<String, String> file, int index) {
		FileDetail fileVO = new FileDetail();
		
		fileVO.setFileNm(file.get("originalName"));
		fileVO.setStoredNm(file.get("storedName"));
		fileVO.setUrl(file.get("url"));
		fileVO.setFileSize(Long.parseLong(file.get("size")));
		fileVO.setFileExt(file.get("extension"));
		fileVO.setStoredPath(file.get("path"));
		fileVO.setDownloadUrl(file.get("downloadUrl"));
		fileVO.setDeleteUrl(file.get("deleteUrl"));
		
		return fileVO;
	}

	@Override
	public long generateFileGroup() {
		return createFileGroup().getFileGrpId();
	}
	
	@Override
	public FileGroup createFileGroup() {
		FileGroup fileGroup = new FileGroup();
		mapper.createFileGroup(fileGroup);
		
		return fileGroup;
	}

	@Override
	public FileGroup getFileGroupById(long fileGrpId) {
		return mapper.getFileGroupById(fileGrpId);
	}

	@Override
	public int updateDownCnt(long fileId) {
		return mapper.updateDownCnt(fileId);
	}

	@Override
	public List<FileDetail> getByGroupId(long fileGrpId) {
		return mapper.getByGroupId(fileGrpId);
	}
}