package com.mario.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.mario.beans.Car;
import com.mario.resources.SpringConfigFile;


public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfigFile.class);
        Car car = (Car) context.getBean("car");
        car.run();
    }
}
