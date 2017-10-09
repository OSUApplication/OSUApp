package com.osuapp.constants;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

public class MongoConnection {

	public static MongoClient mongoClient = new MongoClient(ApplicationConstants.LOCALHOST,ApplicationConstants.PORT);
	public static Morphia morphia = new Morphia();  
	public static Datastore dataStore = morphia.createDatastore(mongoClient, ApplicationConstants.DATABASE_NAME);
	
}
