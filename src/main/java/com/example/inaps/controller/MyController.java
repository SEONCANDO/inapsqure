package com.example.inaps.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyController {
    @GetMapping("/main")
    public String index(){
        return "index.html";
    }


    @GetMapping("/login")
    public String login(){
        return "joinForm.html";
    }

}
