package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// HelloController.java
@RestController
public class HelloController {
    @GetMapping("/api/ping")
    public String ping() { return "pong"; }
}

