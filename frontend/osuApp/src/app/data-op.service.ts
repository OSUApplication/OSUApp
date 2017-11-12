import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { SessionService } from './session.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataOpService {

  headers:Headers;


  constructor(private http: Http,private session:SessionService) {
  }

  getAllUserData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

	  return this.http.get('http://localhost:8084/osu/api/getAllUsers',{ headers : headers}).map((response)=>response.json())

  }

  setTutorCourseData(body){
    var self = this
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    var session = this.session.getSession();
    console.log("session",session);
    body.email = session.email;
    body.name = session.name;
    let postBody = JSON.stringify({"name" : body.name, "email" : body.email, "department" :body.dept,"tutorAs":true,"courseOffering":body.courseOffering});
    return this.http.post('http://localhost:8084/osu/api/updateUser',postBody, {
      headers:headers
    });

    }

  signup(email, password, name){
    let postBody = JSON.stringify({"email": email, "password": password, "name": name});
    let headers = new Headers();
    headers.append('Content-Type','application/json')
     return this.http.post('http://localhost:8084/osu/auth/signup',postBody,  {headers: headers})
  }

  setRegistrationData(body){
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access','application/json');


    let postBody = JSON.stringify({"name" : body.name, "email" : body.email, "password":body.password});

    return this.http.post('http://localhost:8084/osu/api/addUser',postBody, {
            headers:this.headers
            })
  }




}
