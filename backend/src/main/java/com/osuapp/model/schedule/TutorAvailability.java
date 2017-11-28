package com.osuapp.model.schedule;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Property;

import java.util.Date;

@Entity("TutorAvailability")
public class TutorAvailability {


    @Property("tutorId")
    public String tutorId;

    @Property("date")
    public Date date;
    
    @Property("startdate")
    public Date startdate;
    
    @Property("enddate")
    public Date enddate;


}
