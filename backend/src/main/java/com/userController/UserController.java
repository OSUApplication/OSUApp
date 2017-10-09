package com.userController;

import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;

@RestController
@RequestMapping("/api")
public class UserController {
	
	UserService userSerivce; 
	Gson gson = new Gson(); 
	
	//dependency injection of login service 
	@Autowired
	public UserController(UserService userSerivce) {
		this.userSerivce = userSerivce;
	}

	@RequestMapping(value="/getAllUsers",method=RequestMethod.GET)
	public String getUsers() {
		return gson.toJson(userSerivce.getAllUser());
	}
	
	@RequestMapping(value="/getUser/{email:.+}",method=RequestMethod.GET)
	public User getUser(@PathVariable("email") String emailID) {
		return userSerivce.getUser(emailID);
	}
	
	@RequestMapping(value="/addUser",method=RequestMethod.POST)
	public ResponseEntity<?> addUser(@RequestBody User user) throws URISyntaxException{
		return userSerivce.addUser(user);
	}
	
}