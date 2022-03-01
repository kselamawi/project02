package com.revature;

import com.revature.models.Purchase;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication()
public class MtsBootApplication {

	public static void main(String[] args) {

		SpringApplication.run(MtsBootApplication.class, args);


	}

}
