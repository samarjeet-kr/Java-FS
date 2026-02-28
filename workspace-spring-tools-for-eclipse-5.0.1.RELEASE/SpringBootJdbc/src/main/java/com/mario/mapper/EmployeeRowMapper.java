package com.mario.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

//import org.jspecify.annotations.Nullable;
import org.springframework.jdbc.core.RowMapper;

import com.mario.entities.Employee;

public final class EmployeeRowMapper implements RowMapper<Employee>{

	@Override
	public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		
		Employee emp = new Employee();
		emp.setId(rs.getLong("id"));
		emp.setName(rs.getString("name"));
		emp.setAddress(rs.getString("address"));
		
		return emp;
	}
	
}
