package com.emailController;
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
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.courseController.CourseController;
import com.example.OsuAppApplication;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.model.Email;
import com.osuapp.service.CourseService;
import com.osuapp.service.EmailService;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@WebMvcTest(CourseController.class)
public class emailControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	EmailService emailservice;
	
	private static Email MockEmail;
	
	@BeforeClass
	public static void initTestClass() {
		MockEmail = new Email("test@gmail.com","12345","test2@gmail.com","heyo","example message");
		
	}
	 @Test
	    public void sendEmail() throws Exception {
	        mvc.perform(MockMvcRequestBuilders.post("/api/sendEmail").contentType(MediaType.APPLICATION_JSON));
	    	RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/sendEmail")
					.contentType(MediaType.APPLICATION_JSON)
					.content(ApplicationConstants.POST_CONTENT)
					.accept(MediaType.APPLICATION_JSON);
	 }
	
}
