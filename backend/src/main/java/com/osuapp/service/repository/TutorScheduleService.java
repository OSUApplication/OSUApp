package com.osuapp.service.repository;

import com.osuapp.model.schedule.AvailabilityDatePattern;
import com.osuapp.model.schedule.TutorAvailability;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@Repository
public interface TutorScheduleService {

    ResponseEntity<TutorAvailability> addTutorAvailability(TutorAvailability tutorAvailability) throws URISyntaxException;

    List<TutorAvailability> getAllAvailableDates(String tutorId);

    List<TutorAvailability> getAvailableDatesFor(String tutorId, Date startDate, Date endDate);

    ResponseEntity<AvailabilityDatePattern> addAvailabilityPattern(AvailabilityDatePattern availabilityDatePattern) throws URISyntaxException;

    List<AvailabilityDatePattern> getAvailablePatterns(String tutorId);

    List<AvailabilityDatePattern> getAvailablePatternsFor(String tutorId, Date startDate, Date endDate);

}
