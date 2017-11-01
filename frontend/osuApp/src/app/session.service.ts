import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers } from '@angular/http';

@Injectable()
export class SessionService {

  static currentUser:any[];
  class:string = "SessionService";
  headers:Headers;

  constructor(private http: Http) { 
 	  }

  getSession(){
  	var self = this;
  	return SessionService.currentUser;
  }

  setSession(){
  	
  	var self = this;
  	var email = 'patty@gmail.com';
  	this.setHeaders();

   	this.headers.append('Access-Control-Allow-Origin','http://localhost:4200');

   	if(SessionService.currentUser){
   		SessionService.currentUser = [];
   	}

  	return this.http.get('http://localhost:8084/api/getUser/'+email,{headers: this.headers}).map((response)=>response.json()).toPromise().then(
        function(data){
            SessionService.currentUser=data;
        }
      );
  

  }

  setHeaders(){
    this.headers = new Headers();
  }
}
