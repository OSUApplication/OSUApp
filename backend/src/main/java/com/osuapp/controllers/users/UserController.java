package com.osuapp.controllers.users;

import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;
import com.osuapp.model.User;
import com.osuapp.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {
	
	UserService userSerivce; 
	Gson gson = new Gson(); 
	
	//dependency injection of user service 
	@Autowired
	public UserController(UserService userSerivce) {
		this.userSerivce = userSerivce;
	}

	@RequestMapping(value="/getAllUsers",method=RequestMethod.GET)
	public String getAllUsers() {
		return gson.toJson(userSerivce.getAllUsers());
	}
	
	@CrossOrigin
	@RequestMapping(value="/getUser/{email:.+}",method=RequestMethod.GET)
	public String getUser(@PathVariable("email") String emailID) {
		return gson.toJson(userSerivce.getUser(emailID));
	}
	
	@RequestMapping(value="/addUser",method=RequestMethod.POST)
	public ResponseEntity<?> addUser(@RequestBody User user) throws URISyntaxException{
		return userSerivce.addUser(user);
	}
	
	@RequestMapping(value="/getTutor/{subjectName}",method=RequestMethod.GET)
	public String getTutors(@PathVariable("subjectName") String subjectName){
		return gson.toJson(userSerivce.getAllTutorsForSubject(subjectName));
	}
	
	@RequestMapping(value="/updateUser",method=RequestMethod.POST)
	public ResponseEntity<?> updateUser(@RequestBody User user) throws URISyntaxException{
		 return userSerivce.updateUser(user);
	}
	
}