package com.revature.controllers;


import com.revature.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    public UserController(){

    }


    @GetMapping("/")
    @ResponseBody
    public List<User> getAllPeople(){
        List<User> userList = new ArrayList<>();
        User user = new User("John", "Jenkins", "jk@email.com", "password");
        userList.add(user);
        return userList;
    }

}
