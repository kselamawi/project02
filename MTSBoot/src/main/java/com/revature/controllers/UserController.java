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

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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

    @PutMapping("/{id}/update")
    @ResponseBody
    public ResponseEntity<String> updateUser(@PathVariable("id")int id, @RequestBody User user){
        System.out.println(user);
        user.setId(id);
        us.updateUser(user);
        return new ResponseEntity<String>("Information Updated", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public User getUserById(@PathVariable("id")int id){
    return us.getUserById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User u, HttpServletResponse response) throws NotAValidLogin {
        System.out.println(u.getEmail() + " " +u.getPassword());
        User test = us.login(u);
        if(test != null){
            Cookie cookie = new Cookie("id", ""+test.getId());
            response.addCookie(cookie);
            return new ResponseEntity<String>("YES", HttpStatus.OK);
        }
        return new ResponseEntity<>("Wrong login information", HttpStatus.FORBIDDEN);
    }

    @GetMapping("/logout")
    public ResponseEntity<String> login(HttpServletResponse response) {
        Cookie cookie = new Cookie("id", null);
        cookie.setMaxAge(0);

        response.addCookie(cookie);

        return new ResponseEntity<>("User has been logged out.", HttpStatus.OK);
    }

}
