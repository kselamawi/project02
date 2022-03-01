package com.revature.services;
import com.revature.models.Purchase;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.*;

/*
Borrowed from:
https://www.infoworld.com/article/2075785/javamail-quick-start.html#:~:text=JavaMail%20quick%20start%201%20Setup.%20If%20you%20use,introduced%20the%20javax.mail.Part%20interface%20implemented%20by%20javax.mail.Message.%20
 */

public class EmailService {

    public static void main(String args[]) {
        try {
            String smtpServer = args[0];
            String to = args[1];
            String from = args[2];
            String subject = args[3];
            String body = args[4];
            //send(smtpServer, to, from, subject, body);
            send("smtp.office365.com", "jeremiah.grimes@revature.net",
                    "germygrimes@gmail.com", "testing java mail", "test test test");
        } catch (Exception e) {
            System.out.println("Usage: smtpServer toAddress fromAddress subjectText bodyText");
        }
        System.exit(0);
    }

    /**
    * "send" method to send the message.
    */
    public static void send(String smtpServer, String to, String from, String subject, String body){
        try{
            Properties props = System.getProperties();
            // -- Attaching to default Session, or we could start a new one --
            props.put("mail.smtp.host", smtpServer);
            Session session = Session.getDefaultInstance(props, null);
            // -- Create a new message --
            Message msg = new MimeMessage(session);
            // -- Set the FROM and TO fields --
            msg.setFrom(new InternetAddress(from));
            msg.setRecipients(Message.RecipientType.TO,
            InternetAddress.parse(to, false));
            // -- We could include CC recipients too --
            // if (cc != null)
            // msg.setRecipients(Message.RecipientType.CC
            // ,InternetAddress.parse(cc, false));
            // -- Set the subject and body text --
            msg.setSubject(subject);
            msg.setText(body);
            // -- Set some other header information --
            msg.setHeader("email", "jeremiah.grimes@revature.net");
            msg.setHeader("password", "WeeWeeRoof12*");
            msg.setSentDate(new Date());
            // -- Send the message --
            Transport.send(msg);
            System.out.println("Message sent OK.");
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
