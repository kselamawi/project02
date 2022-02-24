package com.revature.controllers;


import com.revature.exceptions.NotAValidLogin;
import com.revature.models.User;
import com.revature.repository.UserRepository;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User u, HttpSession session) throws NotAValidLogin {
        if(us.login(u.getEmail())) {
            session.setAttribute("id", u.getId());
            return new ResponseEntity<String>("YES", HttpStatus.OK);
        }
        return new ResponseEntity<>("Wrong login information", HttpStatus.FORBIDDEN);
    }

}
