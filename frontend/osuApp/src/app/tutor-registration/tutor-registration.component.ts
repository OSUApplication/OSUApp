import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';
import { Router } from '@angular/router';

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

   constructor(private router: Router){}

   ngOnInit(){}

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
      this.router.navigate(['homepage']);
    }

}
