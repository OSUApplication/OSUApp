package com.userController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.mongodb.morphia.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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
		Query<User> userQuery = MongoConnection.dataStore.createQuery(User.class).field("email").equal(emailID);
		return userQuery.get();
	}

	@Override
	public ResponseEntity<?> addUser(User user) throws URISyntaxException {
		List<User> userList = MongoConnection.dataStore.createQuery(User.class).asList();
		MongoConnection.dataStore.save(user);
		List<User> updatedUserList = MongoConnection.dataStore.createQuery(User.class).asList();
		if((userList.size()+1) == updatedUserList.size())
			return ResponseEntity.status(HttpStatus.CREATED).location(new URI("/api/getUser"+user.email)).build();
		else
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build();
	}
}
