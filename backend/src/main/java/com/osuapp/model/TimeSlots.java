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
	
	@Property("startTime")
	public String startTime;
	
	@Property("endTime")
	public String endTime;
	
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

	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public boolean isConfirmed() {
		return confirmed;
	}
	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}
}
