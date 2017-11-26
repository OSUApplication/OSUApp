package com.osuapp.controllers.timeslotController;

import com.osuapp.OsuAppApplication;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.model.TimeSlots;
import com.osuapp.service.TimeSlotService;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@WebMvcTest(TimeSlotService.class)
public class TimeSlotControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	TimeSlotService timeslotservice;
	
	public static TimeSlots timeslot = new TimeSlots();
	public static List<TimeSlots> timeSlotsList = new ArrayList<>();
	
	@BeforeClass
	public static void initTestClass() {
		timeslot.setStudentId(ApplicationConstants.GENERIC_TIMESLOT_STDUENTID);
		timeslot.setTutorId(ApplicationConstants.GENERIC_TIMESLOT_TUTORID);
		timeslot.setDate(ApplicationConstants.GENERIC_TIMESLOT_DATE);
		timeslot.setStartTime(ApplicationConstants.GENERIC_TIMESLOT_STARTTIME);
		timeslot.setEndTime(ApplicationConstants.GENERIC_TIMESLOT_ENDTIME);
		timeslot.setConfirmed(false);	
		timeSlotsList.add(timeslot);
	}

	@Test
	@WithMockUser("customTutor")
	public void test() throws Exception {
//		fail("Not yet implemented");
		Mockito.when(timeslotservice.getTimeSlotsForStudent(Mockito.anyString())).thenReturn(timeSlotsList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/api/schedule/timeslot/getTimeSlots/1000").accept(MediaType.APPLICATION_JSON);
		MvcResult testResult = this.mockMvc.perform(requestBuilder).andReturn();
//		JSONAssert.assertEquals(ApplicationConstants.GENERIC_GET_TIMESLOT_RESULT, testResult.getResponse().getContentAsString(), false);
	}

}
