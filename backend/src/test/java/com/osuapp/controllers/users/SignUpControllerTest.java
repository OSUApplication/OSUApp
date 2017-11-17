//package com.osuapp.controllers.users;
//
//import com.osuapp.OsuAppApplication;
//import com.osuapp.model.User;
//import com.osuapp.service.UserService;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.skyscreamer.jsonassert.JSONAssert;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.test.context.support.WithMockUser;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.RequestBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//@RunWith(SpringRunner.class)
//@ContextConfiguration(classes = OsuAppApplication.class)
//@WebMvcTest(UserController.class)
//public class SignUpControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    //mocking the User Service
//    @MockBean
//    private UserService userService;
//
//
//    @Test
//    @WithMockUser("customTutor")
//    public void shouldSignUpUser() throws Exception {
//        User createdUser = new User();
//        createdUser.name = "Chris Rock";
//        createdUser.password = "password";
//        createdUser.email = "rockc@oregonstate.edu";
//
//        Mockito.when(userService.getUser(Mockito.anyString())).thenReturn(null);
//        Mockito.when(userService.addUser(Mockito.any(User.class))).thenReturn(ResponseEntity.status(HttpStatus.CREATED).build());
//
//        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/osu/auth/signup").accept(MediaType.APPLICATION_JSON);
//        MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
//        JSONAssert.assertEquals("{\"name\":\"Chris Rock\",\"email\":\"rockc@oregonstate.edu\"}",testResult.getResponse().getContentAsString(),false);
//    }
//
//}
