package com.mario.beans;

public class Engine {
	private String type;
	public void setType(String type) {
		this.type = type;
	}
	public void start() {
		System.out.println("Engine type is " + type + " has started..." );
	}
}
