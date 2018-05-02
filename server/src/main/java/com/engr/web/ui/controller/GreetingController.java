package com.engr.web.ui.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/app")
public class GreetingController {

    @RequestMapping("/info")
    public Object info(){
        Map<String,Object> map = new HashMap<>();
        map.put("info","hello hello hello");
        return map;
    }

}
