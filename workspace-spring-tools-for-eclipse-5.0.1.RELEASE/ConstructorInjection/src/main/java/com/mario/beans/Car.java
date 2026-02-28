package com.mario.beans;

public class Car {
	private Engine engine;
	
	public Car(Engine engine) {
		this.engine = engine;
	}
	
	public void run() {
		engine.start();
		System.out.println("Car is running...");
	}
}
