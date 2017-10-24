package com.osuapp.service;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.osuapp.model.User;

@Repository
public interface UserService {

	List<User> getAllUser();
	
	User getUser(String emailID);
	
	ResponseEntity<?> addUser(User user) throws URISyntaxException;
	
	List<User> getAllUsers(String subjectName);
	
	ResponseEntity<?> updateUser(User user) throws URISyntaxException;
}
