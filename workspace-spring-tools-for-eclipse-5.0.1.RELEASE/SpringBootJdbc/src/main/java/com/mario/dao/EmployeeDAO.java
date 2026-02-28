package com.mario.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mario.entities.Employee;
import com.mario.mapper.EmployeeRowMapper;

@Repository
public class EmployeeDAO {
// dao - repo
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public boolean insertEmployee(Employee emp) {
		
		boolean status = false;
		try {
		String INSERT_QUERY = "INSERT INTO employee(id,name,address) values(?,?,?)";
		int count = jdbcTemplate.update(INSERT_QUERY, emp.getId(), emp.getName(), emp.getAddress());
		status = count > 0;
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("");
		}
		return status;
	}
	
	public boolean updateEmployee(Employee emp) {
			
			boolean status = false;
			try {
			String UPDATE_QUERY = "UPDATE employee SET name=?,address=? WHERE id=?";
			int count = jdbcTemplate.update(UPDATE_QUERY,emp.getName(),emp.getAddress(),emp.getId());
			status = count > 0;
			}catch(Exception e){
				e.printStackTrace();
				System.out.println("");
			}
			return status;
	}
	
	public boolean deleteEmployee(Employee emp) {
		
		boolean status = false;
		try {
		String DELETE_QUERY = "DELETE FROM employee WHERE id = ?";
		int count = jdbcTemplate.update(DELETE_QUERY,emp.getId());
		status = count > 0;
		}catch(Exception e){
			e.printStackTrace();
			//System.out.println("");
		}
		return status;
	}

	public List<Employee> selectAllEmployee(){
		String SELECT_ALL_QUERY = "SELECT * FROM employee";
		return jdbcTemplate.query(SELECT_ALL_QUERY, new EmployeeRowMapper());
	}
	
	public Employee selectSingleEmployee(long id){
		String SELECT_SINGLE_QUERY = "SELECT * FROM employee WHERE id = ?";
		return jdbcTemplate.queryForObject(SELECT_SINGLE_QUERY, new EmployeeRowMapper(), id);
	}
	
}
