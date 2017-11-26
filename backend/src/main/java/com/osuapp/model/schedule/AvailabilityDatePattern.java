package com.osuapp.model.schedule;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Property;

import java.util.Date;

@Entity("AvailabilityDatePattern")
public class AvailabilityDatePattern {

    @Property("tutorId")
    public String tutorId;

    @Property("date")
    public Date date;

    @Property("startDate")
    public Date startDate;

    @Property("endDate")
    public Date endDate;

    @Property("repeatType")
    public RepeatType repeatType;

}


enum RepeatType {
    EVERYDAY, WEEKLY, MONTHLY, YEARLY
}