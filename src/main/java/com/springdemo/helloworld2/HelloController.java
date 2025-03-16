package com.springdemo.helloworld2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
    @RequestMapping("/")
    public String index() {
        return "redirect:/index.html"; // Lädt "src/main/resources/static/index.html"
    }
}


