package com.osuapp.model;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isStudentAs() {
		return studentAs;
	}

	public void setStudentAs(boolean studentAs) {
		this.studentAs = studentAs;
	}

	public boolean isTutorAs() {
		return tutorAs;
	}

	public void setTutorAs(boolean tutorAs) {
		this.tutorAs = tutorAs;
	}

	public List<String> getCourseSeeking() {
		return courseSeeking;
	}

	public void setCourseSeeking(List<String> courseSeeking) {
		this.courseSeeking = courseSeeking;
	}

	public List<String> getCourseOffering() {
		return courseOffering;
	}

	public void setCourseOffering(List<String> courseOffering) {
		this.courseOffering = courseOffering;
	}
	
	
}
