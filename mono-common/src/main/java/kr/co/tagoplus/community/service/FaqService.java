package kr.co.tagoplus.community.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.community.entity.Faq;

public interface FaqService extends GenericService<Faq, Integer> {

    public Faq getBySeq(int seq);

}
