package com.osuapp.service;

import org.springframework.stereotype.Repository;

import com.osuapp.model.Course;

@Repository
public interface CourseService {

	Course getAllCourses(String departmentName);	
}
