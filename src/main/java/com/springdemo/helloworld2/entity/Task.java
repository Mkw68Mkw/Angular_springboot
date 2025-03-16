package com.springdemo.helloworld2.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
} 