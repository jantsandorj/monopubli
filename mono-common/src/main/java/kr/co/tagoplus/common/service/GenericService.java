package kr.co.tagoplus.common.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import kr.co.tagoplus.common.model.StringIdList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import kr.co.tagoplus.common.model.NumericIdList;

public interface GenericService<T, ID extends Serializable> {
	public List<T> getAll();
	public List<T> getByIdList(List<ID> ids);
	public List<T> getByIdList(NumericIdList ids);
	
	public List<T> getByFilter(Pageable pageable);
	public List<T> getByFilter(T entity, Pageable pageable);
	public List<T> getByFilter(Map<String, Object> params);
	public List<T> getByFilter(Map<String, Object> params, Pageable pageable);
	
	public Page<T> getPagedByFilter(Pageable pageable);
	public Page<T> getPagedByFilter(T entity, Pageable pageable);
	public Page<T> getPagedByFilter(Map<String, Object> params, Pageable pageable);
	
	public long countByFilter(Pageable pageable);
	public long countByFilter(T entity, Pageable pageable);
	public long countByFilter(Map<String, Object> params);
	public long countByFilter(Map<String, Object> params, Pageable pageable);
	
	public T getById(ID id);
	public Optional<T> findById(ID id);
	public boolean existById(ID id);
	
	public int insert(T entity);
	public int insertWithId(T entity, ID id);
	public int insertByBulk(List<T> list);
	public int update(T entity);
	
	public int deleteById(ID id);
	public int deleteByIdAndCreatedBy(ID id, String createdBy);
	public int delete(T entity);
	public int deleteByBulk(NumericIdList ids);
	public int deleteByBulk(StringIdList ids);

	public int updateViewCount(ID id);
}