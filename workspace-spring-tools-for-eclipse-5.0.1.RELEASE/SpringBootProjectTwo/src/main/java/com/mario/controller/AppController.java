package com.mario.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AppController {
	
	@GetMapping("/") //req
	@ResponseBody()	//res
	public String printString() {
		return "Hello World !";
	}
}
