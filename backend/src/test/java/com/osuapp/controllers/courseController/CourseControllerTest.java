package com.osuapp.controllers.courseController;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.oauth2.common.util.Jackson2JsonParser;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.google.gson.Gson;
import com.osuapp.OsuAppApplication;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.model.Course;
import com.osuapp.service.repository.CourseService;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@WebMvcTest(CourseController.class)
public class CourseControllerTest {
	
	//auto wiring the service
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	CourseService courseService;
	
	private static Course testCourse = new Course();
	private static List<String> testCourseList = new ArrayList<>();
	
	@BeforeClass
	public static void initTestClass() {
		testCourse.setDepartmentName(ApplicationConstants.GENERIC_DEPARTMENT_NAME);
		testCourseList.add(ApplicationConstants.GENERIC_COURSE_OFFERING);
		testCourse.setCourseList(testCourseList);
	}
	
	@Test
	@WithMockUser("customTutor")
	public void getAllCourses() throws  Exception {
		Mockito.when(courseService.getAllCourses(Mockito.anyString())).thenReturn(testCourse);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(ApplicationConstants.GENERIC_GET_ALL_COURSES_URL).accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(ApplicationConstants.EXPECTED_TEST_COURSE_RESULT, testResult.getResponse().getContentAsString(), false);
	}
}
