package com.mario.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
	
	@Autowired
	// Dependency injection
	Engine engine;
	
	public void run() {
		engine.start();
		System.out.println("Car is running...");
	}
}
