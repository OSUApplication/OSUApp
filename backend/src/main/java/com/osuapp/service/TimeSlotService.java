package com.osuapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.osuapp.model.TimeSlots;

@Service
public interface TimeSlotService {
	
	public List<TimeSlots> getTimeSlotsForStudent(String sid);
	public List<TimeSlots> getTimeSlotsForTutor(String sid);
	public boolean deleteTimeSlot(String slotId);
	public String createTimeSlot(TimeSlots timeslot);
	public ResponseEntity<String> updateTimeSlot(TimeSlots timeslot);

}
