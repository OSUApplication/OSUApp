package com.osuapp.model;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

@Entity("timeslots")
public class TimeSlots {

	@Id 
	private String id;
	
	@Property("sId")
	public String StudentId;
	
	@Property("tId")
	public String TutorId;
	
	@Property("date")
	public String Date;
	
	@Property("time")
	public String Time;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Property("confirmed")
	public boolean confirmed;
	

	public String getStudentId() {
		return StudentId;
	}
	public void setStudentId(String studentId) {
		StudentId = studentId;
	}
	public String getTutorId() {
		return TutorId;
	}
	public void setTutorId(String tutorId) {
		TutorId = tutorId;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	public boolean isConfirmed() {
		return confirmed;
	}
	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}
}
