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

	  this.http.get('http://localhost:8084/osu/api/getAllUsers',{ headers : headers}).map((response)=>response.json()).subscribe(
      function(data){
          this.result=data;
          console.log(this.result);
      }
    )
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

}
