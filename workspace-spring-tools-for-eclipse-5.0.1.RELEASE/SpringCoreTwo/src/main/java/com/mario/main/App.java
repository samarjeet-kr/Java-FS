package com.mario.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mario.beans.Employee;
import com.mario.beans.Student;

public class App 
{
    public static void main( String[] args )
    {
    		String config_loc = "com/mario/resources/applicationContext.xml";
        ApplicationContext context = new ClassPathXmlApplicationContext(config_loc);
        Student std = (Student) context.getBean("student");
        Employee emp = (Employee) context.getBean("employee"); // always small
        
        std.show();
        emp.display();
    }
}
