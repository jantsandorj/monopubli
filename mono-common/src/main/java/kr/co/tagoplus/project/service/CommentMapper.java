package kr.co.tagoplus.project.service;

import kr.co.tagoplus.common.service.GenericMapper;
import kr.co.tagoplus.project.entity.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper extends GenericMapper<Comment, Long> {
    public int register(Comment comment);

    public List<Comment> getByProjectSeq(Long projectSeq);
}
