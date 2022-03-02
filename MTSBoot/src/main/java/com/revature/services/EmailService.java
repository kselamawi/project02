package com.revature.services;
import com.revature.models.*;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class EmailService
{
    String smtpServer = "smtp.gmail.com";
    String to;
    String from = "germygrimes@gmail.com";
    String subject = "Thank You For Your Purchase!";
    String body;
    int userId;
    User u;
    PurchaseService ps;

    EmailService(){}

    EmailService(String smtpServer, String to, String from, String subject, String body) {
        this.smtpServer = smtpServer;
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.body = body;
    }

    //smtpServer and from should always be the same, so don't need them
    EmailService(String to, String body) {
        this.to = to;
        this.body = body;
    }

    public void getEmailInfo(){
        to = u.getEmail();
    }

    public void setBody() {
        List<Ticket> tickets = ps.getPurchaseById(userId).getTickets();

        body = "Thank you, " + u.getFirst() + "for your purchase of " + tickets.size() + "tickets to see " +
                tickets.get(0).getMovieTitle() + "on " + tickets.get(0).getShowTimeDate() + ". Enjoy the movie!";
    }

    public void send(){
        setBody();
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