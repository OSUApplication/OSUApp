package com.userController;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
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

import com.example.OsuAppApplication;
import com.osuapp.model.User;
import com.osuapp.service.UserService;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@WebMvcTest(UserController.class)
public class UserControllerTest{
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private UserService userService;
	
	List<User> tutorList = new ArrayList<User>();

	@Before
	public void initTest() {
		User testTutor = new User();
		testTutor.setName("Chris Rock");
		tutorList.add(testTutor);
	}
	
	@Test
	public void getAllUsers() throws Exception {
		Mockito.when(userService.getAllUser()).thenReturn(tutorList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/getAllUsers").accept(MediaType.APPLICATION_JSON);
		MvcResult testReuslt = this.mockMvc.perform(requestBuilder).andReturn();
		String expected = "[{\"name\":\"Chris Rock\"}]";
		JSONAssert.assertEquals(expected,testReuslt.getResponse().getContentAsString(),false);
	}
}
