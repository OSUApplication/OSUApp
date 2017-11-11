import { Injectable } from '@angular/core';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataOpService {

  headers:Headers;


  constructor(private http: Http) {
  }

  getAllUserData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

	  return this.http.get('http://localhost:8084/osu/api/getAllUsers',{ headers : headers}).map((response)=>response.json())

    //return this.http.get('http://localhost:8084/api/getAllUsers',{ headers : this.headers}).map((response)=>response.json())
  }

  setTutorCourseData(body){
    var self = this
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let postBody = JSON.stringify({"name" : body.name, "email" : body.email, "department" : "cs","tutorAs":"true","courseOffering":body.courseOffering});
    return this.http.post('http://localhost:8084/api/updateUser',postBody, {
      headers:headers
    });

    }

  signup(email, password){
    let postBody = JSON.stringify({"email": email, "password": password});
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
