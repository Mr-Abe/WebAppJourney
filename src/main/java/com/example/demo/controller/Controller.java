package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {
    
    @GetMapping("/health")
    public String getHealthCheck(){
        return "Hello World";
    }
    
}
