package kr.co.tagoplus.common.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @Class Name : GenericMapper.java
 * @Description : Generic CRUD mapper interface
 * @param <T>
 * 
 */
@Mapper
public interface GenericMapper<T, ID extends Serializable> {

	List<T> getAll();
	List<T> getByIdList(@Param("idList") Iterable<ID> idList);
	
	List<T> getByFilter(Map<String, Object> params);
	long countByFilter(Map<String, Object> params);
	
	T getById(ID id);
	boolean existById(ID id);
	
	int insert(T entity);
	int insertWithId(@Param("entity") T entity, @Param("id") ID id);
	int insertByBulk(List<T> list);
	int update(T entity);
	int updateViewCount(ID id);
	
	int deleteById(ID id);
	int deleteByIdAndCreatedBy(ID id, String createdBy);
	int delete(T entity);
	int deleteByBulk(@Param("ids") Iterable<ID> idList);
}