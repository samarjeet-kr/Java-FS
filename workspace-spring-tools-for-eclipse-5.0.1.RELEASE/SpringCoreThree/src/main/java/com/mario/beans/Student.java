package com.mario.beans;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Student {
	
	@Value("12")
	private int roll;
	@Value("Shaun")
	private String name;
	@Value("96")
	private int marks;
	
	public int getRoll() {
		return roll;
	}
	public void setRoll(int roll) {
		this.roll = roll;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
	
	public void show() {
		System.out.println("Student Details ...");
		System.out.println("Name : " + name );
		System.out.println("Roll : " + roll);
		System.out.println("Marks : " + marks);
		System.out.println();
	}
	
}
