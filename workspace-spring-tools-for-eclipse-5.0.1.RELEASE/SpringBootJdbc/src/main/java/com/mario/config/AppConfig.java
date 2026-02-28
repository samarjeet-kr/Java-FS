package com.mario.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mario.dao.EmployeeDAO;
import com.mario.entities.Employee;

@Configuration
public class AppConfig {
	
	@Autowired
	private EmployeeDAO employeeDAO;
	
	
	@Bean
	public CommandLineRunner cmdlineRunner() {
		return new CommandLineRunner() {

			@Override
			public void run(String... args) throws Exception {
				// TODO Auto-generated method stub
				
				/*
				// Create
				Employee emp = new Employee(2L,"Shaun","Kolkata");
				boolean status = employeeDAO.insertEmployee(emp);
				System.out.println(status == true ? "Employee Added" : "Employee not Added...");
				*/
				
				/*
				// Update
				Employee emp = new Employee(2L,"Yoshi","Japan");
				boolean status = employeeDAO.updateEmployee(emp);
				System.out.println(status == true ? "Employee Updated" : "Employee not Updated...");
				*/
				
				/*
				// Delete
				Employee emp = new Employee();
				emp.setId(1L);
				boolean status = employeeDAO.deleteEmployee(emp);
				System.out.println(status == true ? "Employee Deleted" : "Employee not Deleted...");
				*/
				
				/*
				// Select all
				List<Employee> eList = employeeDAO.selectAllEmployee();
				System.out.println("Employee Details ....");
				for(Employee list : eList) {
					System.out.println("Employee Name : "+ list.getName() );
					System.out.println("Employee Id : " + list.getId());
					System.out.println("Employee Address : " + list.getAddress());	
				}
				*/
				
				// Select Single	
				Employee emp = employeeDAO.selectSingleEmployee(2L);
				System.out.println("Employee Name : "+ emp.getName() );
				System.out.println("Employee Address : " + emp.getAddress());
				
				
			}
			
		};
	}
}
