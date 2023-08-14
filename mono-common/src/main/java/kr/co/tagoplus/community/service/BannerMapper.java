package kr.co.tagoplus.community.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.community.entity.Banner;

@Mapper
public interface BannerMapper extends GenericMapper<Banner, Long> {
    public int insert(Banner board);
    public int update(Banner board);
    public List<Banner> getByTypeAndLimit(Map<String, Object> param);
}