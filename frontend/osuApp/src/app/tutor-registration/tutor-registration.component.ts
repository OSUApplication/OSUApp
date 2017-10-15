import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Jsonp} from '@angular/http';



@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent implements OnInit {

   public model: Tutor;

   name:string = "Shashank";

   course:any[] = [{'id': 1,'cno':'','cname':''}];

   id:number = 1;

   result:Array<any> = [];

   constructor(private router: Router, private http : Http){


   }


   
   ngOnInit(){

    this.http.get('http://localhost:8084/api/getAllUsers').map((response)=>response.json()).subscribe(
        function(data){
            this.result=data;
            console.log(this.result);
        }
      )
   }


  display(name){
  			console.log("cousre offered are",this.course);
  }

  addCourseInfo(){
    this.course.push({'id': this.id+1, 'cno':'','cname':''});
    this.id += 1;

  }

  deleteCourseInfo(id){
    var target = this.course.indexOf(id);
    var index = target;
    if(index < 1){
        index = 0;
    }
    this.course.splice(index,1);

  }


  back(){
    this.router.navigate(['/']);
  }
}
