package com.userController;

import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

@Entity("user")
public class User {
	
	@Property("name")
	public String name; 
	
	@Property("department")
	public String department;
	
	@Property("email")
	public String email;
	
	@Property("student")
	public boolean student;
	
	@Property("tutor")
	public boolean tutor;
	
	@Property("course_seeking")
	public List<String> courseSeeking;
	
	@Property("course_offering")
	public List<String> courseOffering;
}
