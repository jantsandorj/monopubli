package kr.co.tagoplus.project.service;

import kr.co.tagoplus.common.service.GenericService;
import kr.co.tagoplus.project.entity.Comment;

public interface CommentService extends GenericService<Comment, Long> {
    public int register(Comment comment);
}
