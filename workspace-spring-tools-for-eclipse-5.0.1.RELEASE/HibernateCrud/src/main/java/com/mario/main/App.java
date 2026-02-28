package com.mario.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.mario.entities.Employee;

public class App 
{
    public static void main( String[] args )
    {
        Employee emp = new Employee();
        emp.setName("Puffy");
        emp.setSalary(89922);
        
        Configuration cfg = new Configuration();
        cfg.configure("/com/mario/config/hibernate.cfg.xml");
        
        SessionFactory sessionFactory = cfg.buildSessionFactory();
        
        Session session = sessionFactory.openSession();
        
        Transaction transaction = session.beginTransaction();
        
        /*
        // create
        try{
        		session.save(emp);
        		transaction.commit();
        		System.out.println("Employee Added...");
        }catch(Exception e){
        		transaction.rollback();
        		e.printStackTrace();
        		System.out.println("Employee Not Added...");
        }
        */
        
        /*
        // Read
        try {
        		Employee emp2 = session.get(Employee.class, 3L);
	        	if(emp2!=null) {
	            	System.out.println("Employee Added...");
	            	System.out.println("Employee ID " + emp2.getId());
	            	System.out.println("Employee Name : " + emp2.getName());
	            	System.out.println("Employee Salary : " + emp2.getSalary());
	        }
        }catch(Exception e){
	        	//transaction.rollback();
	    		e.printStackTrace();
	    		System.out.println("Employee Not Added...");
        }
        */
        
        /*
        // Update
        try {
    		Employee emp3 = session.get(Employee.class, 3L);
	        	if(emp3!=null) {
	        		emp3.setName("Uday");
	            	emp3.setSalary(4599990);
	            	session.update(emp3);
	            	transaction.commit();
	        		System.out.println("Employee Updated...");
	        }
        }catch(Exception e){
	        	transaction.rollback();
	    		e.printStackTrace();
	    		System.out.println("Employee Not Updated...");
        }
        */
        
        // Delete
        try {
        		Employee emp4 = session.get(Employee.class, 3L);
        		if(emp4 != null) {
        			emp.setId(3L);
        			session.delete(emp4);
        			transaction.commit();
        			System.out.println("Employee Deleted...");
        		}
        }catch(Exception e) {
	        	transaction.rollback();
	    		e.printStackTrace();
	    		System.out.println("Employee Not Deleted...");
        }
        
    }
}
