package com.osuapp.service;


import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.email.*;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailService {
	
	ResponseEntity<?> sendEmail(String from,String password,String to,String sub,String msg) throws URISyntaxException;

}
