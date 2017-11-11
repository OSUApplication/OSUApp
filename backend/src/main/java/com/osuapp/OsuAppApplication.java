package com.osuapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OsuAppApplication {
    private static final Logger logger = LoggerFactory.getLogger(OsuAppApplication.class);

    public static void main(String[] args) {
		SpringApplication.run(OsuAppApplication.class, args);
        logger.debug("--Application Started--");
	}

}
