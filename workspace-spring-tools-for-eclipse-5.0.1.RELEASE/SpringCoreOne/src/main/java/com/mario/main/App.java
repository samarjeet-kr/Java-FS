package com.mario.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mario.beans.Student;

public class App 
{
    public static void main( String[] args )
    {
    		String config_loc = "com/mario/resources/applicationContext.xml";
        ApplicationContext context = new ClassPathXmlApplicationContext(config_loc);
        Student std1 = (Student)context.getBean("stdBean1");
        Student std2 = (Student)context.getBean("stdBean2");
        
        std1.show();
        std2.show();
        
    }
}
