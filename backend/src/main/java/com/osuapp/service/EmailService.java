package com.osuapp.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.osuapp.model.Email;
@Service
public interface EmailService {
	
	ResponseEntity<Email> sendEmail(Email user); 
}
