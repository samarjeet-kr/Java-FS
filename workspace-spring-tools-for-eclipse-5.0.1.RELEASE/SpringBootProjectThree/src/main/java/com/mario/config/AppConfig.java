package com.mario.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mario.beans.Student;

@Configuration
public class AppConfig {
	
	@Bean
	public CommandLineRunner cmdLineRunner() {
		return new CommandLineRunner() {

			@Override
			public void run(String... args) throws Exception {
				// TODO Auto-generated method stub
				
				std1().show();
				std2().show();
				
			}
			
		};
	}
	
	@Bean
	public Student std1() {
		return new Student(1, "Mario", 90);
	}
	
	@Bean
	public Student std2() {
		return new Student(2, "Shaun", 88);
	}
	
}
