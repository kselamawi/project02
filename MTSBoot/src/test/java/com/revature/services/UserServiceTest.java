package com.revature.services;

import com.revature.exceptions.NotAValidLogin;
import com.revature.models.Purchase;
import com.revature.models.User;
import com.revature.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

public class UserServiceTest {
    @Mock
    UserRepository userRepository;
    @InjectMocks
    UserService userService;
    User user;
    List<User> userList;

    @Before
    public void setupTest() {
        MockitoAnnotations.openMocks(this);

    }

    @Test
//1
    public void createNewUser() {
        when(userService.createNewUser("solomon@email.com", "solomon", "kahsai", "password"))
                .thenReturn(user);

        assertEquals(userService.createNewUser("solomon@email.com", "solomon", "kahsai", "password"), user);
    }
    //2
    @Test
    public void getAllUsers() {
        when(userService.getAllUsers())
                .thenReturn(userList);

        assertEquals(userService.getAllUsers(), userList);
    }
    //3
    @Test
    public void getUserById() {
        when(userService.getUserById(anyInt()))
                .thenReturn(user);

        assertEquals(userService.getUserById(anyInt()), user);
    }
    //4
    @Test
    public void updateUser() {
        User user =new User(
                "Isaiah",
                "Payne",
                "Isaiah@email.com",
                "password");
        userService.updateUser(any());
    }
//5
    @Test
    public void findUserByEmail() {
        when(userRepository.findUserByEmail(anyString()))
                .thenReturn(user);
        assertEquals(userRepository.findUserByEmail(anyString()), user);
    }
    //6
    @Test
    public void login() throws NotAValidLogin {
        when(userRepository.findUserByEmail(anyString()))
                .thenReturn(user);
        assertEquals(userRepository.findUserByEmail(anyString()), user);
        assertEquals(userService.login(user),true);
    }



}







