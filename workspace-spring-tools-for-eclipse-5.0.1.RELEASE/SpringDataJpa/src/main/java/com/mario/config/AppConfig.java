package com.mario.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mario.entities.Task;
import com.mario.service.TaskService;

@Configuration
public class AppConfig {
	
	@Autowired
	public TaskService taskService;
	
	@Bean
	public CommandLineRunner cmdLineRunner() {
		return new CommandLineRunner() {	// interface to run bean 

			@Override
			public void run(String... args) throws Exception {
				/*
				// create
				Task t1 = new Task("Learn Spring Boot", "Spring Data JPA CRUD");
				taskService.createTask(t1);
				System.out.println("Task Inserted...");	
				*/
				
				/*
				// read single by id
				Task task = taskService.getTaskById(1L);
				if(task != null) {
					System.out.println(task.getTitle() +  " " + task.getDescription());
				}else {
					System.out.println("Task not found");
				}
				*/
				
				/*
				// Read All
				List<Task> list = taskService.getAllTasks();
				list.forEach(t -> {
					System.out.println("Task id : "+t.getId());
					System.out.println("Task title : "+t.getTitle());
					System.out.println("Task description : "+t.getDescription());
				});
				*/
				
				/*
				// update
				Task updateTask = new Task("Updated Title","Updated Description");
				taskService.updateTask(1L, updateTask);
				System.out.println("Task updated");
				*/
				
				/*
				// delete
				taskService.deleteTask(2L);
				System.out.println("Task Deleted");
				*/
				
			}	
		};
	}
}

