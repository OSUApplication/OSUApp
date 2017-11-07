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
     	this.setHeaders();
        return this.http.get('http://localhost:8084/api/getAllUsers',{ headers : this.headers}).map((response)=>response.json())

  }

  setTutorCourseData(body){
    this.setHeaders();
    console.log(body);

    this.headers.append('Content-Type','application/json');
    this.headers.append('Access','application/json');

    let postBody = JSON.stringify({"name" : body.name, "email" : body.email, "department" : "cs","tutorAs":"true","courseOffering":body.courseOffering});
        return this.http.post('http://localhost:8084/api/updateUser',postBody, {
        headers:this.headers
        });

    }

  setRegistrationData(body){
    this.setHeaders();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access','application/json');

    let postBody = JSON.stringify({"name" : body.name, "email" : body.email, "password":body.password});

    return this.http.post('http://localhost:8084/api/addUser',postBody, {
            headers:this.headers
            })
  }

  setHeaders(){
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin','http://localhost:4200');
  }

}
