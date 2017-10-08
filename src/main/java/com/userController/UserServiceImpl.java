package com.userController;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.osuapp.constants.ApplicationConstants;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public List<User> getAllUser() {

		MongoClient client = new MongoClient(ApplicationConstants.LOCALHOST,ApplicationConstants.PORT);
		final Morphia morphia = new Morphia();
		Datastore ds = morphia.createDatastore(client, ApplicationConstants.DATABASE_NAME); 
		Query<User> query = ds.createQuery(User.class);
		List<User> users = query.asList();
		return users;
	}

}
