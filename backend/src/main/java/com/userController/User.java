package com.userController;

import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

@Entity("tutor")
public class User {
	
	@Property("name")
	public String name; 
	
	@Property("department")
	public String department;
	
	@Property("email")
	public String email;
	
	@Property("student_as")
	public boolean studentAs;
	
	@Property("tutor_as")
	public boolean tutorAs;
	
	@Property("course_seeking")
	public List<String> courseSeeking;
	
	@Property("course_offering")
	public List<String> courseOffering;
}
