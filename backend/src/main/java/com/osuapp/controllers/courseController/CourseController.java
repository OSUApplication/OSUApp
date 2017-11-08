package com.osuapp.controllers.courseController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.osuapp.service.CourseService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class CourseController {
	
	CourseService courseService;
	Gson gson = new Gson();
	
	//dependency Injection
	@Autowired
	public CourseController(CourseService courseService) {
		super();
		this.courseService = courseService;
	}

	@RequestMapping("{departmentName}/getAllCourses")
	public String getAllCourses(@PathVariable("departmentName") String departmentName) {
		return gson.toJson(courseService.getAllCourses(departmentName));
	}
}