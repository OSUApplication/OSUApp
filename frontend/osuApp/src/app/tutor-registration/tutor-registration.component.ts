import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataOpService} from '../data-op.service';
import { SessionService } from '../session.service';
import { RegFilterPipe } from '../regSelectFilter.pipe';



@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})


export class TutorRegistrationComponent implements OnInit {

   public model: Tutor;

   name:string = "";

   email:string = '';

   department:string = '';

   course:any[] = [{'id': 1,'course':'','active':true,'block':true}]

   courseOffering:any[] = [];

   id:number = 1;

   result:any = [];

   courseData:any;

   courseNumber:any=[];

   courseName:any=[];

   confirmedCourses:any=[];

   loggedin:boolean;
   constructor(private router: Router,public toastr: ToastsManager, private session: SessionService,vcr: ViewContainerRef, private dataservice:DataOpService){


    this.toastr.setRootViewContainerRef(vcr);
    this.courseOffering= [];

    var self = this;
    this.dataservice.getCourses().subscribe(function(data){
      self.splitCourseData(data);
       });
   }

   ngOnInit(){
  
   }

    log(x){
      console.log(x);
    }

    showSuccess() {
        var self = this
        this.toastr.success('Tutor Added !', 'Success!');
        setTimeout(function(){self.router.navigate(['manageTutor']);
},1000);
      }

    showFailure(){
        this.toastr.error("Tutor not Added, Something went wrong ");
    }



  display(){
        var self =this;
        this.courseOffering = this.confirmedCourses;
        this.dataservice.setTutorCourseData(this).subscribe(function(resp){
           if(resp.status == 202){
                  self.showSuccess();
              }
        })
  }

  addCourseInfo(){

    this.course.push({'id': this.id+1,'course':'','active':true,'block':true});
    this.id += 1;

  }

  checkCourse(data){
    console.log("course is",data);
  }

  disableSelect(data){
    this.confirmedCourses.push(this.course[data-1].course);
    this.course[data-1].active=false;
  }

  activateSelect(data){
    this.confirmedCourses.splice(this.course.indexOf(data),1);
    this.course[data-1].active=true;

  }

  disableBlock(data){
    this.course[data-1].block=false;
  }

  deleteCourseInfo(id){
    var target = this.course.indexOf(id);
    var index = target;  
    if(index < 1){
        index = 0;
    }
    this.id -= 1;
    this.course.splice(index,1);
    this.course[target-1].block=true;
    }


  back(){
    this.router.navigate(['/']);
  }

  logout(){
    localStorage.removeItem("user");
    console.log("localstorage is",localStorage.getItem("user"));
    this.router.navigate(['']);
  }

  splitCourseData(data){
      for(var d in data){
          for(var list in data[d].courseList){
              this.courseName.push(data[d].courseList[list]);
          }      
      }
  }
}

