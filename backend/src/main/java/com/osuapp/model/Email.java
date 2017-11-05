package com.osuapp.model;

public class Email {

	public String from;
	public String password;
	public String to;
	public String subject;
	public String msg;

	
	public Email(String from, String to, String msg, String password, String subject){
		this.from =from;
		this.to= to;
		this.msg = msg;
		this.password = password;
		this.subject =subject;
	}
}
