package com;

import com.osuapp.OsuAppApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = OsuAppApplication.class)
@SpringBootTest(classes = OsuAppApplication.class)
public class OsuAppApplicationTests {

	@Test
	public void contextLoads() {
	}

}
