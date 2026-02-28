package com.mario;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootProjectOneApplication {

	public static void main(String[] args) {
		System.out.println("App started...");
		SpringApplication.run(SpringBootProjectOneApplication.class, args);
		System.out.println("App finished...");
	}

}
