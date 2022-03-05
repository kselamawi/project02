package com.revature;

import com.revature.models.Purchase;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@SpringBootApplication()
public class MtsBootApplication {

	public static void main(String[] args) {

		SpringApplication.run(MtsBootApplication.class, args);

	}
}
