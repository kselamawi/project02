package com.revature.services;

import com.revature.exceptions.NotAValidLogin;
import com.revature.models.User;
import com.revature.repository.UserRepository;
import com.revature.models.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Locale;

@Service
@Transactional
public class UserService {

    private UserRepository ur;

    @Autowired
    public UserService(UserRepository ur){
        this.ur = ur;
    }

    public UserService(){}

    public User createNewUser(String email, String first, String last, String password){
        User u = new User(first, last, email, password);
        u.setUserType(UserType.CUSTOMER);
        System.out.print(u);
        return ur.save(u);
    }

    public List<User> getAllUsers(){
        return ur.findAll();
    }

    public User getUserById(int id) {
        return ur.getById(id);
    }

    public boolean login(String email) throws NotAValidLogin {
        System.out.println(ur.findUserByEmail(email));
        if(ur.findUserByEmail(email)!= null){
            return true;
        }
        return false;
    }
}
