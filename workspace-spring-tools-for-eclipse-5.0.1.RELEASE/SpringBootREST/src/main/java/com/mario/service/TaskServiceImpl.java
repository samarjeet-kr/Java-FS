package com.mario.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mario.entities.Task;
import com.mario.repository.TaskRepository;

@Service
// Defines service implemented class
public class TaskServiceImpl implements TaskService{

	@Autowired
	private TaskRepository taskRepository;
	
	@Override
	public Task createTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}
	
	@Override
	public Task getTaskById(Long id) {
		return taskRepository.findById(id).orElse(null);
	}
	
	@Override
	public Task updateTask(Long id, Task newtask) {
		Task task = taskRepository.findById(id).orElse(null);
		if(task != null) {
			task.setTitle(newtask.getTitle());
			task.setDescription(newtask.getDescription());
			return taskRepository.save(task);
		}
		return null;
	}

	@Override
	public void deleteTask(Long id) {
		taskRepository.deleteById(id);
	}

}

/* 
1. Create Operation - save(E entity)
2. Update Operation - save(E entity)
3. Delete Operation - deleteById(Id id)
4. Read Operation - findById(Id id), findAll()
*/
