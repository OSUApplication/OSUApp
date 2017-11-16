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

  getSession():any{
    if(localStorage.getItem("user"))
  	return JSON.parse(localStorage.getItem("user"));
    else
    return null;
  }


 
  setSession(token,uemail){
  	
    console.log("entered set session",token);
  	var self = this;
  	var email = uemail;

    var headers = new HttpHeaders();
    headers.set("Authorization","Bearer "+token);
   	if(SessionService.currentUser){
   		SessionService.currentUser = [];
   	}

    var config = {headers:headers};
  	return this.http.get('http://localhost:8084/osu/api/getUser/'+email,config).toPromise().then(
        function(data){
            var session = {};
            var result = JSON.parse(JSON.stringify(data));
            var utoken = JSON.parse(token);
            session["user"] = result["name"];
            session["email"] = email;
            session["access_token"]= utoken.access_token;
            session["is_tutor"] = result.tutorAs;
            session["course_offerings"]=result.courseOffering;
            localStorage.setItem("user",JSON.stringify(session));
            console.log(localStorage.getItem("user"));
            return 1;
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
