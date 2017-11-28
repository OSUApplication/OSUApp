package com.osuapp.service;

import com.mongodb.WriteResult;
import com.osuapp.constants.ApplicationConstants;
import com.osuapp.constants.MongoConnection;
import com.osuapp.model.schedule.AvailabilityDatePattern;
import com.osuapp.model.schedule.TutorAvailability;
import com.osuapp.service.repository.TutorScheduleService;
import org.mongodb.morphia.query.Query;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@Service("TutorScheduleService")
public class TutorScheduleServiceImpl implements TutorScheduleService {


    @Override
    public ResponseEntity<TutorAvailability> addTutorAvailability(TutorAvailability tutorAvailability) throws URISyntaxException {
        MongoConnection.dataStore.save(tutorAvailability);
        return ResponseEntity.status(HttpStatus.CREATED).location(new URI(ApplicationConstants.SCHEDULE_AVAILABILITY_END_POINT + tutorAvailability.tutorId)).build();
    }

    @Override
    public List<TutorAvailability> getAllAvailableDates(String tutorId) {
        Query<TutorAvailability> tutorAvailabilityQuery = MongoConnection.dataStore.createQuery(TutorAvailability.class).field("tutorId").equal(tutorId);
        return tutorAvailabilityQuery.asList();
    }

    @Override
    public List<TutorAvailability> getAvailableDatesFor(String tutorId, Date startDate, Date endDate) {
        Query<TutorAvailability> tutorAvailabilityQuery = MongoConnection.dataStore.createQuery(TutorAvailability.class).field("tutorId").equal(tutorId);
        tutorAvailabilityQuery.criteria("date").greaterThanOrEq(startDate).add(tutorAvailabilityQuery.criteria("date").lessThanOrEq(endDate));
        return tutorAvailabilityQuery.asList();
    }

    @Override
    public ResponseEntity<AvailabilityDatePattern> addAvailabilityPattern(AvailabilityDatePattern availabilityDatePattern) throws URISyntaxException {
        MongoConnection.dataStore.save(availabilityDatePattern);
        return ResponseEntity.status(HttpStatus.CREATED).location(new URI(ApplicationConstants.SCHEDULE_AVAILABILITY_PATTERN_END_POINT + availabilityDatePattern.tutorId)).build();
    }

    @Override
    public List<AvailabilityDatePattern> getAvailablePatterns(String tutorId) {
        Query<AvailabilityDatePattern> tutorAvailabilityQuery = MongoConnection.dataStore.createQuery(AvailabilityDatePattern.class).field("tutorId").equal(tutorId);
        return tutorAvailabilityQuery.asList();
    }

    @Override
    public List<AvailabilityDatePattern> getAvailablePatternsFor(String tutorId, Date startDate, Date endDate) {
        Query<AvailabilityDatePattern> tutorAvailabilityQuery = MongoConnection.dataStore.createQuery(AvailabilityDatePattern.class).field("tutorId").equal(tutorId);
        tutorAvailabilityQuery.criteria("startDate").greaterThanOrEq(startDate).add(tutorAvailabilityQuery.criteria("endDate").lessThanOrEq(endDate));
        return tutorAvailabilityQuery.asList();
    }

	@Override
	public boolean deleteAvailability(String id, String startdate, String enddate) {
		// TODO Auto-generated method stub
		
		Date start = new Date(startdate);
		Date end = new Date(enddate);
		Query<TutorAvailability> tutorAvailabilityQuery = MongoConnection.dataStore.createQuery(TutorAvailability.class).field("tutorId").equal(id).field("startdate").equal(start).field("enddate").equal(end);
		WriteResult deletedSlot = MongoConnection.dataStore.delete(tutorAvailabilityQuery);
		return (deletedSlot.getN()>0)?true:false;
	}
}
