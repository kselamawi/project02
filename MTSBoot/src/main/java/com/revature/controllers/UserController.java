package com.revature.controllers;


import com.revature.models.User;
import com.revature.repository.UserRepository;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private UserService us;

    public UserController(){

    }

    @Autowired
    public UserController(UserService us){
        this.us = us;
    }


    @GetMapping("/")
    @ResponseBody
    public List<User> getAllPeople(){
        return us.getAllUsers();
    }

    @PostMapping("/")
    @ResponseBody
    public User createUser(@RequestBody User u){

    return us.createNewUser(u.getEmail(), u.getFirst(), u.getLast(), u.getPassword());
    }

    @GetMapping("/{id}")
    @ResponseBody
    public User getUserById(@PathVariable("id")int id){
    return us.getUserById(id);
    }

}
