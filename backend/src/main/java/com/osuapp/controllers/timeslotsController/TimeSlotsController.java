package com.osuapp.controllers.timeslotsController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.osuapp.model.TimeSlots;
import com.osuapp.service.TimeSlotService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TimeSlotsController {
	
	TimeSlotService timeSlotService;
	Gson gson = new Gson(); 
	
	//dependency injection of user service 
	@Autowired
	public TimeSlotsController(TimeSlotService timeSlotService) {
		super();
		this.timeSlotService = timeSlotService;
	}
	
	@RequestMapping(value="/schedule/timeslot/getTimeSlots/{id}",method=RequestMethod.GET)
	public String getTimeSlots(@PathVariable("id") String id) {		
		return gson.toJson(timeSlotService.getTimeSlotsForTutor(id));
	}
	
	@RequestMapping(value="/schedule/timeslot/deleteTimeSlot/{id}",method=RequestMethod.DELETE)
	public String deleteTimeSlots(@PathVariable("id") String id) {		
		return gson.toJson(timeSlotService.deleteTimeSlot(id));
	}
	
	@RequestMapping(value="/schedule/timeslot/updateTimeSlot",method=RequestMethod.POST)
	public String updateTimeSlot(@RequestBody TimeSlots timeslot) {
		return gson.toJson(timeSlotService.updateTimeSlot(timeslot));
	}
	
	@RequestMapping(value="/schedule/timeslot/createTimeSlot",method=RequestMethod.POST)
	public String createTimeSlot(@RequestBody TimeSlots timeslot) {
		return gson.toJson(timeSlotService.createTimeSlot(timeslot));
		
	}
	
	
}
