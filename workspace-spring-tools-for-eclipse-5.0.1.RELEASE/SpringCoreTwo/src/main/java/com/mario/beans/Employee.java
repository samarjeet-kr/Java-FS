package com.mario.beans;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Employee {
	@Value("101")
	private int id;
	@Value("Mario")
	private String ename;
	@Value("50000")
	private int salary;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public void display() {
		System.out.println("Employee Details ...");
		System.out.println("Employee Name : " + ename );
		System.out.println("ID : " + id);
		System.out.println("Salary : " + salary);
		System.out.println();
	}
}
