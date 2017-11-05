package com.email;
import java.net.URI;

import java.net.URISyntaxException;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.osuapp.constants.ApplicationConstants;
import com.osuapp.service.EmailService;

@Service
public class EmailImpl implements EmailService {

	
	@Override
	public ResponseEntity<?> sendEmail(String from,String password,String to,String sub,String msg) {
        Properties props = new Properties();    
        props.put("mail.smtp.host", "smtp.gmail.com");    
        props.put("mail.smtp.socketFactory.port", "465");    
        props.put("mail.smtp.socketFactory.class",    
                  "javax.net.ssl.SSLSocketFactory");    
        props.put("mail.smtp.auth", "true");    
        props.put("mail.smtp.port", "465");    
        //get Session   
        try {
        Session session = Session.getDefaultInstance(props,    
         new javax.mail.Authenticator() {    
         protected PasswordAuthentication getPasswordAuthentication() {    
         return new PasswordAuthentication(from,password);  
         }    
        });  
        
        
        //compose message      
         MimeMessage message = new MimeMessage(session);    
         message.setFrom(new InternetAddress(from));
         message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));    
         message.setSubject(sub);    
         message.setText(msg);    
         //send message  
         Transport.send(message);    
         System.out.println("message sent successfully");    
		 return new ResponseEntity<String>(HttpStatus.ACCEPTED);
        } catch (Exception e) {System.out.println(e.getMessage());
         return new ResponseEntity<String>(HttpStatus.NOT_IMPLEMENTED);
        }
		
		// TODO Auto-generated method stub
	}

	
}
