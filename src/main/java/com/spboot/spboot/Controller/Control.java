package com.spboot.spboot.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
@RestController
public class Control {

    ArrayList <User>users=new ArrayList<>();

    @PostMapping("/create-user")
    public String create_User(@RequestBody User u){
        int flag=0;
        for(User u1:users){
            if(u1.getEmail().equals(u.getEmail())){
return "Email Exist!";           }
        }
        users.add(u);
        return "";
    }
}
