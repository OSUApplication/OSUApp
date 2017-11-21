package com.osuapp.service;

import java.net.URI;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;
import org.mongodb.morphia.query.UpdateResults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mongodb.DBCollection;
import com.mongodb.WriteResult;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.constants.MongoConnection;
import com.osuapp.model.TimeSlots;
import com.osuapp.model.User;

@Repository
public class TimeSlotImpl implements TimeSlotService {

	@Override
	public List<TimeSlots> getTimeSlotsForTutor(String tid) {
		// TODO Auto-generated method stub
		
		 List<TimeSlots> timeslots = MongoConnection.dataStore.createQuery(TimeSlots.class).field("tId").equal(tid).asList(); 
		 return timeslots;
	}

	@Override
	public List<TimeSlots> getTimeSlotsForStudent(String sid) {
		// TODO Auto-generated method stub
		 List<TimeSlots> timeslots = MongoConnection.dataStore.createQuery(TimeSlots.class).field("sId").equal(sid).asList(); 
		 return timeslots;
	}
	
	
	@Override
	public boolean deleteTimeSlot(String slotId) {
		// TODO Auto-generated method stub
		ObjectId objectId = new ObjectId(slotId);

		Query deleteSlot = MongoConnection.dataStore.createQuery(TimeSlots.class).field("id").equal(objectId);
		WriteResult deletedSlot = MongoConnection.dataStore.delete(deleteSlot);
		return deletedSlot.wasAcknowledged();
	}

	@Override
	public String createTimeSlot(TimeSlots timeslot) {
		// TODO Auto-generated method stub
		Key<TimeSlots>  createSlot = MongoConnection.dataStore.save(timeslot);
		return createSlot.getId().toString();	
	}

	@Override
	public ResponseEntity<String> updateTimeSlot(TimeSlots timeslot) {
		// TODO Auto-generated method stub
		String slotId = timeslot.getId().toString();
		ObjectId objectId = new ObjectId(slotId);

		Query<TimeSlots> query = MongoConnection.dataStore.createQuery(TimeSlots.class).field("id").equal(objectId);

		UpdateOperations<TimeSlots> updateTimeSlot = checkFields(timeslot);
		
	    UpdateResults updateResults = MongoConnection.dataStore.update(query, updateTimeSlot);
	   
	    if(updateResults.getUpdatedExisting()==true) 
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	    else 
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build();
		
	}
	
	public UpdateOperations<TimeSlots> checkFields( TimeSlots timeslot){
		
		Datastore ds = MongoConnection.dataStore;
		UpdateOperations<TimeSlots> updatefields = ds.createUpdateOperations(TimeSlots.class);
		
		if(timeslot.StudentId != null) {
			updatefields.set("sId", timeslot.getStudentId());
		}
		
		if(timeslot.TutorId != null) {
			updatefields.set("tId", timeslot.getTutorId());
		}
		
		if(timeslot.confirmed == true) {
			updatefields.set("confirmed", true);
		}
		else {
			updatefields.set("confirmed", false);
		}
		
		if(timeslot.Date != null) {
			updatefields.set("date", timeslot.getDate());
		}
		
		if(timeslot.startTime !=null) {
			updatefields.set("time",timeslot.getStartTime());
		}

		if(timeslot.endTime !=null) {
			updatefields.set("time",timeslot.getEndTime());
		}
	
	
		return updatefields;
	}



}
