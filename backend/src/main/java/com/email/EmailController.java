package com.email;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.email.*;
import java.net.URISyntaxException;
import java.util.Properties;    
import javax.mail.*;
import javax.mail.internet.*;
import javax.mail.util.*;
import com.osuapp.model.*;
import com.osuapp.service.EmailService;
import com.osuapp.service.UserService;

import java.rmi.activation.*;
import javax.mail.Session;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmailController {

	EmailService emailService;
	
	//dependency injection of user service 
	@Autowired
	public EmailController(EmailService emailService) {
			this.emailService = emailService;
	}
	
	@RequestMapping(value="/sendMail",method=RequestMethod.POST)
	public ResponseEntity<?> sendEmail(@RequestBody Email email) throws URISyntaxException{
		Email sendUser = new Email(email.from,email.password,email.to,email.subject,email.msg);
		return this.emailService.sendEmail(sendUser.from, sendUser.password, sendUser.to, sendUser.subject, sendUser.msg);
	}
	

}
