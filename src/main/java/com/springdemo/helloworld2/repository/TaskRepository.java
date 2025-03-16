package com.springdemo.helloworld2.repository;

import com.springdemo.helloworld2.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
} 