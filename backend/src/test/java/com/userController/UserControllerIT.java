package com.userController;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.OsuAppApplication;
import com.osuapp.constants.ApplicationConstants;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = OsuAppApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerIT {
	
	@LocalServerPort
	private int port;
	
	TestRestTemplate testRestTemplate = new TestRestTemplate();
	
	HttpHeaders httpHeaders = new HttpHeaders();
	
	@Test
	public void testGetAllUsers() throws Exception{
		HttpEntity<String> entity = new HttpEntity<String>(httpHeaders);
		ResponseEntity<String> response = testRestTemplate.exchange(createURLWithPort(ApplicationConstants.GET_ALL_USERS),HttpMethod.GET,entity,String.class);
		System.out.println(response.getBody()+"adasda");
		System.out.println(ApplicationConstants.GET_ALL_USERS+"aksdgkasgd");
		JSONAssert.assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_LIST,response.getBody(),false);
	}
	
	@Test
	public void testGetUser() throws Exception{
		HttpEntity<String> entity = new HttpEntity<String>(httpHeaders);
		ResponseEntity<String> response = testRestTemplate.exchange(createURLWithPort(ApplicationConstants.GENERIC_TUTOR_URL), HttpMethod.GET,entity,String.class);
		JSONAssert.assertEquals(ApplicationConstants.EXPECTED_TEST_RESULT_OBJECT, response.getBody(), false);
	}
	
	private String createURLWithPort(String uri) {
		return "http://localhost:"+port+uri;
	}

}
