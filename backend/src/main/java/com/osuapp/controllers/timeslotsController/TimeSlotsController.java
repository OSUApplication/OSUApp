package com.osuapp.controllers.timeslotsController;

import com.google.gson.Gson;
import com.osuapp.model.TimeSlots;
import com.osuapp.service.TimeSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TimeSlotsController {
	
	
	TimeSlotService timeSlotService;
	
	@Autowired
	public TimeSlotsController(TimeSlotService timeSlotSerivce) {
		this.timeSlotService = timeSlotSerivce;
	}
	Gson gson = new Gson(); 
	
	@RequestMapping(value="/schedule/timeslot/getTimeSlotsForTutor/{id}",method=RequestMethod.GET)
	public String getTimeSlotsForTutor(@PathVariable("id") String id) {		
		return gson.toJson(timeSlotService.getTimeSlotsForTutor(id));
	}
		
	@RequestMapping(value="/schedule/timeslot/getTimeSlotsForStudent/{id}",method=RequestMethod.GET)
	public String getTimeSlotsForStudent(@PathVariable("id") String id) {		
		return gson.toJson(timeSlotService.getTimeSlotsForStudent(id));
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
