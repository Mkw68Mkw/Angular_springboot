package com.springdemo.helloworld2.repository;

import com.springdemo.helloworld2.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
} 