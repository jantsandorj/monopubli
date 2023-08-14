package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.community.entity.Faq;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface FaqMapper extends GenericMapper<Faq, Integer> {

    public Faq getBySeq(int seq);

    public List<Faq> getByFilter(Map<String, Object> params);

    public int insert(Faq faq);

    public int update(Faq faq);

    public int deleteById(int seq);

}
