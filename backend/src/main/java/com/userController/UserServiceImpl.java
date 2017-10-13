package com.userController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.mongodb.morphia.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.osuapp.constants.ApplicationConstants;
import com.osuapp.constants.MongoConnection;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public List<User> getAllUser() {

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
		if(addedUser.equals(user))
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
		else
			MongoConnection.dataStore.save(user);
			return ResponseEntity.status(HttpStatus.CREATED).location(new URI(ApplicationConstants.GET_USER_END_POINT + user.email)).build();
	}

	@Override
	public List<User> getAllUsers(String subjectName) {
		List<User> userList = MongoConnection.dataStore.createQuery(User.class).field(ApplicationConstants.FIELD_COURSE_OFFERING).equal(subjectName).asList();
		return userList;
	}
}
