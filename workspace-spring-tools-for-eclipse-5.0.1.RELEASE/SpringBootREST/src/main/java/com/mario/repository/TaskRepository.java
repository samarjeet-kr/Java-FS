package com.mario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mario.entities.Task;

public interface TaskRepository extends JpaRepository<Task,Long>{
	
}
