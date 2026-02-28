package com.mario.beans;

import org.springframework.stereotype.Component;

@Component
public class Engine {
	public void start() {
		System.out.println("Engine has started...");
	}
}
