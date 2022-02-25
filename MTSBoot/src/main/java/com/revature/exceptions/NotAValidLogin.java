package com.revature.exceptions;

public class NotAValidLogin extends Exception{

    public NotAValidLogin(){
        super("Not a valid login");
    }
}
