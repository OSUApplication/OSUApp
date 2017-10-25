package com.userController;

import static org.junit.Assert.assertEquals;

import java.net.URI;
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
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.example.OsuAppApplication;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.model.User;
import com.osuapp.service.UserService;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@WebMvcTest(UserController.class)
public class UserControllerTest{
	
	
	//autowiring the User Service
	@Autowired
	private MockMvc mockMvc;
	
	//mocking the User Service
	@MockBean
	private UserService userService;
	 
	private static List<User> tutorList = new ArrayList<User>();
	private static List<String> courseOfferring = new ArrayList<>();
	private static User testTutor = new User();
	
	
	//Initializing variables before class is initiated 
	@BeforeClass
	public static void initTest() {
		testTutor.setName(ApplicationConstants.GENERIC_USERNAME);
		testTutor.setEmail(ApplicationConstants.GENERIC_EMAIL);
		courseOfferring.add(ApplicationConstants.GENERIC_COURSE_OFFERING);
		testTutor.setCourseOffering(courseOfferring);
		tutorList.add(testTutor);
	}
	
	@Test
	public void getAllUsers() throws Exception {
		Mockito.when(userService.getAllUsers()).thenReturn(tutorList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(ApplicationConstants.GET_ALL_USERS).accept(MediaType.APPLICATION_JSON);
		MvcResult testReuslt = this.mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_LIST,testReuslt.getResponse().getContentAsString(),false);
	}
	
	@Test
	public void getUser() throws Exception {
		Mockito.when(userService.getUser(Mockito.anyString())).thenReturn(testTutor);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(ApplicationConstants.GENERIC_TUTOR_URL).accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_OBJECT, testResult.getResponse().getContentAsString(), false);
	}
	
	@Test
	public void getTutor() throws Exception{
		Mockito.when(userService.getAllTutorsForSubject(Mockito.anyString())).thenReturn(tutorList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(ApplicationConstants.GENERIC_TUTOR_FINDER_URL).accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		System.out.println(testResult.getResponse().getContentAsString());
		JSONAssert.assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_LIST,testResult.getResponse().getContentAsString(),false);
	}
	
	@Test
	public void createdAddUser() throws Exception{
		Mockito.when(userService.addUser(Mockito.any(User.class))).thenReturn(ResponseEntity.status(HttpStatus.CREATED).location(new URI(ApplicationConstants.GET_USER_END_POINT+testTutor.getEmail())).build());
		RequestBuilder requestBuilder = MockMvcRequestBuilders.post(ApplicationConstants.ADD_USER)
				.contentType(MediaType.APPLICATION_JSON)
				.content(ApplicationConstants.POST_CONTENT)
				.accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		MockHttpServletResponse testResposne = testResult.getResponse();
		assertEquals(HttpStatus.CREATED.value(),testResposne.getStatus());
		assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_LOCATION,testResposne.getHeader(HttpHeaders.LOCATION));
	}
	
	@Test
	public void notImplementedAddUser() throws Exception{
		Mockito.when(userService.addUser(Mockito.any(User.class))).thenReturn(ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build());
		RequestBuilder requestBuilder = MockMvcRequestBuilders.post(ApplicationConstants.ADD_USER)
				.contentType(MediaType.APPLICATION_JSON)
				.content(ApplicationConstants.POST_CONTENT)
				.accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		MockHttpServletResponse testResposne = testResult.getResponse();
		assertEquals(HttpStatus.NOT_IMPLEMENTED.value(),testResposne.getStatus());
	}
	
	@Test
	public void acceptUpdateUser() throws Exception{
		Mockito.when(userService.updateUser(Mockito.any(User.class))).thenReturn(ResponseEntity.status(HttpStatus.ACCEPTED).location(new URI(ApplicationConstants.GET_USER_END_POINT+testTutor.getEmail())).build());
		RequestBuilder requestBuilder = MockMvcRequestBuilders.post(ApplicationConstants.UPDATE_USER)
				.contentType(MediaType.APPLICATION_JSON)
				.content(ApplicationConstants.POST_CONTENT)
				.accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		MockHttpServletResponse testResponse = testResult.getResponse();
		assertEquals(HttpStatus.ACCEPTED.value(),testResponse.getStatus());
		assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_LOCATION, testResponse.getHeader(HttpHeaders.LOCATION));
	}
	
	@Test
	public void notImplementUpdateUser() throws Exception{
		Mockito.when(userService.updateUser(Mockito.any(User.class))).thenReturn(ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).location(new URI(ApplicationConstants.GET_USER_END_POINT+testTutor.getEmail())).build());
		RequestBuilder requestBuilder = MockMvcRequestBuilders.post(ApplicationConstants.UPDATE_USER)
				.contentType(MediaType.APPLICATION_JSON)
				.content(ApplicationConstants.POST_CONTENT)
				.accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
		MockHttpServletResponse testResponse = testResult.getResponse();
		assertEquals(HttpStatus.NOT_IMPLEMENTED.value(),testResponse.getStatus());
		assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_LOCATION, testResponse.getHeader(HttpHeaders.LOCATION));
	}
}
