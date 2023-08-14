package kr.co.tagoplus.common.service.impl;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import kr.co.tagoplus.common.model.StringIdList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import kr.co.tagoplus.common.model.NumericIdList;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.GenericService;

public abstract class AbstractGenericServiceImpl<T, ID extends Serializable> implements GenericService<T, ID> {

	protected abstract GenericMapper<T, ID> getMapper();
	
	@Override
	public List<T> getAll() {
		return getMapper().getAll();
	}

	@Override
	public List<T> getByIdList(List<ID> ids) {
		return getMapper().getByIdList(ids);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<T> getByIdList(NumericIdList ids) {
		return getMapper().getByIdList((Iterable<ID>) ids.getIds());
	}

	@Override
	public List<T> getByFilter(Pageable pageable) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("page", pageable);
		
		return getMapper().getByFilter(params);
	}

	@Override
	public List<T> getByFilter(T entity, Pageable pageable) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("entity", entity);
		params.put("page", pageable);
		
		return getMapper().getByFilter(params);
	}

	@Override
	public List<T> getByFilter(Map<String, Object> params) {
		return getMapper().getByFilter(params);
	}
	
	@Override
	public List<T> getByFilter(Map<String, Object> params, Pageable pageable) {
		if(params != null) {
			params.put("page", pageable);
		}
		
		return getMapper().getByFilter(params);
	}

	@Override
	public Page<T> getPagedByFilter(Pageable pageable) {
		return null;
	}

	@Override
	public Page<T> getPagedByFilter(T entity, Pageable pageable) {
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("entity", entity);
		parameters.put("page", pageable);
		
		List<T> list = getByFilter(parameters);
		
		return PageableExecutionUtils.getPage(list, pageable,
				() -> countByFilter(parameters));
	}
	
	@Override
	public Page<T> getPagedByFilter(Map<String, Object> params, Pageable pageable) {
		if(params != null) {
			params.put("page", pageable);
		}
		
		List<T> list = getByFilter(params);
		
		return PageableExecutionUtils.getPage(list, pageable,
				() -> countByFilter(params));
	}

	@Override
	public long countByFilter(Pageable pageable) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("page", pageable);
		
		return getMapper().countByFilter(params);
	}

	@Override
	public long countByFilter(T entity, Pageable pageable) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("entity", entity);
		params.put("page", pageable);
		
		return getMapper().countByFilter(params);
	}

	@Override
	public long countByFilter(Map<String, Object> params) {
		return getMapper().countByFilter(params);
	}
	
	@Override
	public long countByFilter(Map<String, Object> params, Pageable pageable) {
		if(params != null) {
			params.put("page", pageable);
		}
		
		return getMapper().countByFilter(params);
	}

	@Override
	public T getById(ID id) {
		return getMapper().getById(id);
	}

	@Override
	public Optional<T> findById(ID id) {
		return Optional.ofNullable(getMapper().getById(id));
	}

	@Override
	public boolean existById(ID id) {
		return getMapper().existById(id);
	}

	@Override
	public int insert(T entity) {
		return getMapper().insert(entity);
	}
	
	@Override
	public int insertWithId(T entity, ID id) {
		return getMapper().insertWithId(entity, id);
	}

	@Override
	public int insertByBulk(List<T> list) {
		return getMapper().insertByBulk(list);
	}

	@Override
	public int update(T entity) {
		return getMapper().update(entity);
	}

	@Override
	public int deleteById(ID id) {
		return getMapper().deleteById(id);
	}

	@Override
	public int deleteByIdAndCreatedBy(ID id, String createdBy) {
		return getMapper().deleteByIdAndCreatedBy(id, createdBy);
	}

	@Override
	public int delete(T entity) {
		return getMapper().delete(entity);
	}

	@SuppressWarnings("unchecked")
	@Override
	public int deleteByBulk(NumericIdList ids) {
		return getMapper().deleteByBulk((Iterable<ID>) ids.getIds());
	}

	@SuppressWarnings("unchecked")
	@Override
	public int deleteByBulk(StringIdList ids) {
		return getMapper().deleteByBulk((Iterable<ID>) ids.getIds());
	}

	@Override
	public int updateViewCount(ID id) {
		return getMapper().updateViewCount(id);
	}
}