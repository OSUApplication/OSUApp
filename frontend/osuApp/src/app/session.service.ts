import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class SessionService {

  static currentUser:any[];
  class:string = "SessionService";
  headers:Headers;

  constructor(private http: HttpClient) { 
 	  }

  getSession():any[]{
  	var self = this;
  	return SessionService.currentUser;
  }


 
  setSession(token){
  	
    console.log("entered set session",token);
  	var self = this;
  	var email = 'test@oregonstate.edu';
  	this.setHeaders();

    var headers = new HttpHeaders();
    headers.set("Authorization","Bearer "+token);
   	if(SessionService.currentUser){
   		SessionService.currentUser = [];
   	}

    var config = {headers:headers};
  	return this.http.get('http://localhost:8084/osu/api/getUser/'+email,config).toPromise().then(
        function(data){
          console.log("data is",data);
            this.data = data;
            this.data = JSON.parse(this.data);
            localStorage.setItem(this.data.name,this.token);
            console.log(localStorage.getItem(this.data.name));
        }
      );


  }

  deleteSession(){
      if(SessionService.currentUser){
       SessionService.currentUser = [];
     }
  }

  setHeaders(){
    this.headers = new Headers();
  }

  
}
