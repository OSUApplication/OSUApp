package com.osuapp.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.google.gson.JsonElement;
import com.osuapp.model.Course;

@Repository
public interface CourseService {

	Course getAllCourses(String departmentName);

	List<Course> getCourses();	
}
