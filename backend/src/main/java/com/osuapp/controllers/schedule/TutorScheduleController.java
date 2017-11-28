package com.osuapp.controllers.schedule;

import com.google.gson.Gson;
import com.osuapp.model.schedule.AvailabilityDatePattern;
import com.osuapp.model.schedule.TutorAvailability;
import com.osuapp.service.repository.TutorScheduleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Date;

@RestController
@RequestMapping("api/schedule")
public class TutorScheduleController {

    TutorScheduleService tutorScheduleService;
    Gson gson = new Gson();

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public TutorScheduleController(TutorScheduleService tutorScheduleService) {
        this.tutorScheduleService = tutorScheduleService;
    }

    @RequestMapping(value="/availability",method= RequestMethod.GET)
    public String getAvailability(@RequestParam(value = "tutorId") String tutorId,
                                  @RequestParam(value = "startDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                  @RequestParam(value = "endDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate) {
        if (startDate != null && endDate != null) {
            return gson.toJson(tutorScheduleService.getAvailableDatesFor(tutorId, startDate, endDate));
        }
        else {
            return gson.toJson(tutorScheduleService.getAllAvailableDates(tutorId));
        }
    }

    @RequestMapping(value = "/availability", method = RequestMethod.POST)
    public ResponseEntity<?> addAvailability(@RequestBody TutorAvailability tutorAvailability) throws URISyntaxException {
        return tutorScheduleService.addTutorAvailability(tutorAvailability);
    }

    @RequestMapping(value="/availability/delete/{id}/{startdate}/{enddate}", method=RequestMethod.DELETE)
    public String deleteAvailability(@PathVariable("id") String id, @PathVariable("startdate") String startdate, @PathVariable("enddate") String enddate){
    	return gson.toJson(tutorScheduleService.deleteAvailability(id, startdate, enddate));
       	}


    @RequestMapping(value = "/pattern", method = RequestMethod.POST)
    public ResponseEntity<?>  addAvailabilityPattern(@RequestBody AvailabilityDatePattern availabilityDatePattern) throws URISyntaxException {
        return tutorScheduleService.addAvailabilityPattern(availabilityDatePattern);
    }

    @RequestMapping(value="/pattern",method= RequestMethod.GET)
    public String getAvailabilityPattern(@RequestParam(value = "tutorId") String tutorId,
                                         @RequestParam(value = "startDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                         @RequestParam(value = "endDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate) {
        if (startDate != null && endDate != null) {
            return gson.toJson(tutorScheduleService.getAvailablePatternsFor(tutorId, startDate, endDate));
        }
        return gson.toJson(tutorScheduleService.getAvailablePatterns(tutorId));
    }
}
