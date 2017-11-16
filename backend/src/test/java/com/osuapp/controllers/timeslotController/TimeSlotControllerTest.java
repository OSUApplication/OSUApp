package com.osuapp.controllers.timeslotController;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
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

import com.osuapp.OsuAppApplication;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.controllers.courseController.CourseController;
import com.osuapp.model.TimeSlots;
import com.osuapp.service.CourseService;
import com.osuapp.service.TimeSlotService;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@WebMvcTest(TimeSlotService.class)
public class TimeSlotControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	TimeSlotService timeslotservice;
	
	public static String getTimeSlotResult = ApplicationConstants.GENERIC_GET_TIMESLOT_RESULT;
	public static String getTimeSlotUrl = ApplicationConstants.GENERIC_GET_TIMESLOT_URL;
	public static TimeSlots timeslot = new TimeSlots();
	
	@BeforeClass
	public static void initTestClass() {
		timeslot.setStudentId(ApplicationConstants.GENERIC_TIMESLOT_STDUENTID);
		timeslot.setTutorId(ApplicationConstants.GENERIC_TIMESLOT_TUTORID);
		timeslot.setDate(ApplicationConstants.GENERIC_TIMESLOT_DATE);
		timeslot.setStartTime(ApplicationConstants.GENERIC_TIMESLOT_STARTTIME);
		timeslot.setEndTime(ApplicationConstants.GENERIC_TIMESLOT_ENDTIME);
		timeslot.setConfirmed(false);	
	}

	@Test
	public void test() throws Exception {
		fail("Not yet implemented");
		Mockito.when(timeslotservice.getTimeSlotsForStudent(Mockito.anyString())).thenReturn((List<TimeSlots>) timeslot);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(ApplicationConstants.GENERIC_GET_TIMESLOT_URL).accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();

		JSONAssert.assertEquals(ApplicationConstants.GENERIC_GET_TIMESLOT_RESULT, testResult.getResponse().getContentAsString(), false);
	}

}
