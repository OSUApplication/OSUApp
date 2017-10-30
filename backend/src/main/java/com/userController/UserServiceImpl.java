package com.userController;
import org.mongodb.morphia.Datastore;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;
import org.mongodb.morphia.query.UpdateResults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mongodb.BasicDBObject;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.constants.MongoConnection;
import com.osuapp.model.User;
import com.osuapp.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public List<User> getAllUsers() {
		Query<User> query = MongoConnection.dataStore.createQuery(User.class);
		List<User> users = query.asList();
		return users;
	}

	@Override
	public User getUser(String emailID) {
		Query<User> userQuery = MongoConnection.dataStore.createQuery(User.class).field(ApplicationConstants.FIELD_EMAIL).equal(emailID);
		return userQuery.get();
	}

	@Override
	public ResponseEntity<?> addUser(User user) throws URISyntaxException {
		User addedUser = MongoConnection.dataStore.createQuery(User.class).field(ApplicationConstants.FIELD_EMAIL).equal(user.email).get();
		if(addedUser == null){
			MongoConnection.dataStore.save(user);
			return ResponseEntity.status(HttpStatus.CREATED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
		}
		else if (addedUser.equals(user))
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
		else
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
	}

	@Override
	public List<User> getAllTutorsForSubject(String subjectName) {
		List<User> userList = MongoConnection.dataStore.createQuery(User.class).field(ApplicationConstants.FIELD_COURSE_OFFERING).equal(subjectName).asList();
		return userList;
	}
	
	@Override
	public ResponseEntity<?> updateUser(User user) throws URISyntaxException
	{
		Query<User> query = MongoConnection.dataStore.createQuery(User.class).field("email").equal(user.email);
		UpdateOperations<User> updatefields = checkFields(user);
				
	    UpdateResults updateResults = MongoConnection.dataStore.update(query, updatefields);
	    if(updateResults.getUpdatedExisting()==true) 
			return ResponseEntity.status(HttpStatus.ACCEPTED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
	    else 
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
	}
	

	public UpdateOperations<User> checkFields(User user) {
		
		
		Datastore ds = MongoConnection.dataStore;
		UpdateOperations<User> updatefields = ds.createUpdateOperations(User.class);
		
		if(user.getName()!=null) {
			updatefields.set("name", user.getName());
		}
		if(user.getEmail()!=null) {
			updatefields.set("email", user.getEmail());
		}
		if(user.getPass()!=null) {
			updatefields.set("password", user.getPass());
		}
		if(user.getDepartment() != null) {
			updatefields.set("department", user.getDepartment());
		}
		if(user.getCourseSeeking()!=null) {
			updatefields.set("courseSeeking",user.getCourseSeeking());
		}
		if(user.getCourseOffering()!=null) {
			updatefields.set("courseOffering",user.getCourseOffering());
		}
		return updatefields;
	}
}
