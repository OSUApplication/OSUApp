package com.osuapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.osuapp.model.TimeSlots;

@Repository
public interface TimeSlotService {
	
	public List<TimeSlots> getTimeSlotsForStudent(String sid);
	public List<TimeSlots> getTimeSlotsForTutor(String sid);
	public boolean deleteTimeSlot(String slotId);
	public String createTimeSlot(TimeSlots timeslot);
	public ResponseEntity<String> updateTimeSlot(TimeSlots timeslot);

}
