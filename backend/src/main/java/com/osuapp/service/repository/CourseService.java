package com.osuapp.service.repository;

import com.osuapp.model.Course;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseService {

	Course getAllCourses(String departmentName);

	List<Course> getCourses();	
}
