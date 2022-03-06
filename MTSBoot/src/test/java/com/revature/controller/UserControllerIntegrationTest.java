package com.revature.controller;


import com.revature.models.User;
import com.revature.repository.UserRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerIntegrationTest {
//@Autowired
//    private TestRestTemplate  testRestTemplate;
//
//@Test
//@Sql("/test.sql")
//    public void getUserByIdTest(){
//    // we need some sample data to run this test
//    ResponseEntity<User>  response =testRestTemplate.getForEntity("/user/1002",User.class);
//   assertEquals(1002,response.getBody().getId());
//    assertEquals("Solomon",response.getBody().getFirst());
//    assertEquals("kahsai",response.getBody().getLast());
//    assertEquals("solomon@email.com",response.getBody().getEmail());
//    assertEquals("password",response.getBody().getPassword());
//}
//// Post request API
//    @Test
//    public void createNewUser(){
//    User user =new User();
//    user.setFirst("Bereket");
//    user.setLast("kahsay");
//    user.setEmail("Bereket@Gmail.com");
//    user.setPassword("password");
//
//        HttpEntity<User> request =new HttpEntity<>(user);
//        ResponseEntity<User> response =testRestTemplate.postForEntity("/user",request,User.class);
//        assertNotNull(response.getBody().getId());
//
//        assertEquals("Bereket",response.getBody().getFirst());
//        assertEquals("kahsay",response.getBody().getLast());
//        assertEquals("Bereket@email.com",response.getBody().getEmail());
//        assertEquals("password",response.getBody().getPassword());
//    }
}
