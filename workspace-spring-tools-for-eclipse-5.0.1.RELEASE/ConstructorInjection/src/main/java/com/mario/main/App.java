package com.mario.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mario.beans.Car;

public class App 
{
    public static void main( String[] args )
    {
    		String config_loc = "com/mario/resources/applicationContext.xml";
        ApplicationContext context = new ClassPathXmlApplicationContext(config_loc);
        Car car = (Car) context.getBean("carBean");
        car.run();
    }
}
