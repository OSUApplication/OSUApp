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

  ngOnInit(){
  }

  getAllUserData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

	  return this.http.get('http://localhost:8084/api/getAllUsers',{ headers : headers}).map((response)=>response.json())

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
    return this.http.post('http://localhost:8084/api/updateUser',postBody, {
      headers:headers
    });

    }

  signup(email, password, name){
    let postBody = JSON.stringify({"email": email, "password": password, "name": name});
    let headers = new Headers();
    headers.append('Content-Type','application/json')
     return this.http.post('http://localhost:8084/auth/signup',postBody,  {headers: headers})
  }

  setRegistrationData(body){
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access','application/json');


    let postBody = JSON.stringify({"name" : body.name, "email" : body.email, "password":body.password});

    return this.http.post('http://localhost:8084/api/addUser',postBody, {
            headers:this.headers
            })
  }

  getAllCoursesByDept(){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')
    return this.http.get("http://localhost:8084/api/CS/getAllCourses",{headers:headers}).map((response)=>response.json())
  }

  getCourses(){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')
    return this.http.get("http://localhost:8084/api/getCourses",{headers:headers}).map((response)=>response.json());
  }

  getTimeSlotForTutor(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

   return this.http.get("http://localhost:8084/api/schedule/timeslot/getTimeSlotsForTutor/"+id,{headers:headers}).map((response)=>response.json());

  }

  getTimeSlotForStudent(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

   return this.http.get("http://localhost:8084/api/schedule/timeslot/getTimeSlotsForStudent/"+id,{headers:headers}).map((response)=>response.json());

  }

 createTimeSlot(timeslot){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')
    console.log("timeslot in create is",timeslot);
    let postBody = JSON.stringify({"TutorId":timeslot.TutorId,"StudentId":timeslot.StudentId,"startTime":timeslot.startTime,"endTime":timeslot.endTime,"course":timeslot.course,"date":timeslot.date,"confirmed":timeslot.false});

    return this.http.post("http://localhost:8084/api/schedule/timeslot/createTimeSlot",postBody,{headers:headers}).map((response)=>response.json()).subscribe(function(date){
    console.log(this.data);
    });
 }

 setTutorAvailableDate(dates){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

    var tutor = this.session.getSession();
    

   let postBody = JSON.stringify({tutorId:tutor.uid,startdate:dates.startdate,enddate:dates.enddate,date:""});

    console.log("postbody is",postBody);
    return this.http.post("http://localhost:8084/api/schedule/availability",postBody,{headers:headers}).map((response)=>response.json()).subscribe(function(date){
    console.log(this.data);
    });

 }

 getTutorAvailableDates(tutorid){
       let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')

    return this.http.get("http://localhost:8084/api/schedule/availability?tutorId="+tutorid,{headers:headers}).map((response)=>response.json());
 }

 deleteTutorAvailableDate(id,start,end){
       let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authentication','Bearer f6b81340-e7b5-4075-8f16-ba244778cb62')
    console.log("delete variables are ",id,start,end);
    return this.http.delete("http://localhost:8084/api/schedule/availability/delete/"+id+"/"+start+"/"+end);
 }
}
