package com.userController;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService {

	List<User> getAllUser();
	
	User getUser(String emailID);
	
	ResponseEntity<?> addUser(User user) throws URISyntaxException;
	
	List<User> getAllUsers(String subjectName);
}
