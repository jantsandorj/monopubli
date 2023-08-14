package kr.co.tagoplus.project.service.impl;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.common.service.impl.AbstractGenericServiceImpl;
import kr.co.tagoplus.project.entity.Comment;
import kr.co.tagoplus.project.service.CommentMapper;
import kr.co.tagoplus.project.service.CommentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional("transactionManager")
public class CommentServiceImpl extends AbstractGenericServiceImpl<Comment, Long> implements CommentService {
    protected static Logger logger = LoggerFactory.getLogger(CommentServiceImpl.class);

    @Autowired
    private CommentMapper mapper;

    @Override
    protected GenericMapper<Comment, Long> getMapper() {
        return mapper;
    }

    @Override
    public int register(Comment comment) {
        return mapper.insert(comment);
    }
}
