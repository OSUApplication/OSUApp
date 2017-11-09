package com.osuapp.controllers.courseController;

import org.mongodb.morphia.query.Query;
import org.springframework.stereotype.Service;

import com.osuapp.constants.ApplicationConstants;
import com.osuapp.constants.MongoConnection;
import com.osuapp.model.Course;
import com.osuapp.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Override
	public Course getAllCourses(String departmentName) {
		Query<Course> courseQuery = MongoConnection.dataStore.createQuery(Course.class).field(ApplicationConstants.FIELD_NAME).equal(departmentName);
		return courseQuery.get();
	}

	
}
