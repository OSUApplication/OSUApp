package com.example.osuapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.healthcontroller","com.UserController"})
public class OsuAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(OsuAppApplication.class, args);
	}
}
