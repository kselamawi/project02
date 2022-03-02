package com.revature.services;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class EmailService
{
    String smtpServer;
    String to;
    String from;
    String subject;
    String body;

    EmailService(String smtpServer, String to, String from, String subject, String body) {
        this.smtpServer = smtpServer;
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.body = body;
    }

    public void send(){
        String host = "localhost";//or IP address

        //Get the session object
        Properties properties = System.getProperties();
        properties.setProperty("smtp.gmail.com", host);
        Session session = Session.getDefaultInstance(properties);

        //compose the message
        try{
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject(subject);
            message.setText(body);

            // Send message
            Transport.send(message);
            System.out.println("message sent successfully....");

        }catch (MessagingException mex) {mex.printStackTrace();}
    }
}  