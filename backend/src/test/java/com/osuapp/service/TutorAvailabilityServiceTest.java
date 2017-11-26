package com.osuapp.service;

import com.osuapp.service.repository.TutorScheduleService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class TutorAvailabilityServiceTest {

    @Autowired
    private TutorScheduleService tutorAvailabilityService;



    @Before
    public void initTest() {

    }

    @Test
    public void shouldGetAvailabilityDates() throws Exception {


    }

    @Test
    public void shouldGetAvailabilityPattern() throws Exception {

    }


}
