package com.revature.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.controllers.UserController;
import com.revature.models.User;
import com.revature.repository.UserRepository;
import com.revature.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
    public class UserControllerTest {

        @Autowired
        private UserController userController;

        @Autowired
        private MockMvc mockMvc;

        @MockBean
        //private UserService userService;
        private UserRepository userRepository;

        @Test
        public void getUserByIdTest() throws Exception {

            //mock the data return by the user service class
            User user = new User();

            user.setFirst("John");
            user.setLast("smith");
            user.setEmail("John@devt.com");
            user.setPassword("password");

            when(userRepository.getUserById(anyInt())).thenReturn(user);
            //create a mock HTTP request to verify the expected result

            mockMvc.perform(MockMvcRequestBuilders.get("/user/12"))
                    .andDo(print())
                    .andExpect(MockMvcResultMatchers.jsonPath("$.first").value("John"))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.last").value("smith"))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("John@devt.com"))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.password").value("password"))
                    .andExpect(status().isOk());

        }

        @Test
        public void saveUserTest() throws Exception {

            //mock the user data that we have to save
            User user = new User();
            user.setId(1);
            user.setFirst("John");
            user.setLast("smith");
            user.setEmail("John@devt.com");
            user.setPassword("password");


            when(userRepository.createNewUser(any(User.class))).thenReturn(user);

            //mock request "/user"

            mockMvc.perform(MockMvcRequestBuilders.post("/user")
                            .content(new ObjectMapper().writeValueAsString(user))
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isCreated())
                    .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                    .andExpect(MockMvcResultMatchers.jsonPath("$.first").value("John"))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.last").value("smith"))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("John@devt.com"))
                    .andExpect(MockMvcResultMatchers.jsonPath("$.password").value("password"));

        }

    }


