package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.osuapp.constants.ApplicationConstants;

@SpringBootApplication(scanBasePackages = {"com.healthcontroller","com.userController","com.courseController"})
public class OsuAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(OsuAppApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigure() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping(ApplicationConstants.GET_ALL_USERS).allowedOrigins(ApplicationConstants.FRONT_END_LOCALHOST);
				registry.addMapping(ApplicationConstants.GET_USER).allowedOrigins(ApplicationConstants.FRONT_END_LOCALHOST);
				registry.addMapping(ApplicationConstants.ADD_USER).allowedOrigins(ApplicationConstants.FRONT_END_LOCALHOST);
				registry.addMapping(ApplicationConstants.GET_TUTOR).allowedOrigins(ApplicationConstants.FRONT_END_LOCALHOST);
				registry.addMapping(ApplicationConstants.GET_ALL_COURSES_BY_DEPTARTMENT).allowedOrigins(ApplicationConstants.FRONT_END_LOCALHOST);
			}
		};
	}
}
