package com.springdemo.helloworld2.repository;

import com.springdemo.helloworld2.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
} 