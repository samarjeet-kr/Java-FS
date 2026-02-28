package com.mario.service;

import java.util.List;

import com.mario.entities.Task;

public interface TaskService {
	Task createTask(Task task);
	List<Task> getAllTasks();
	Task updateTask(Long id, Task task);
	Task getTaskById(Long id);
	void deleteTask(Long id);
	
}
