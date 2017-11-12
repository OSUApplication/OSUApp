import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataOpService} from '../data-op.service';
import { SessionService } from '../session.service';



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

   course:any[] = [{'id': 1,'cno':'','cname':'','dept':''}];

   courseOffering:any[] = [];

   id:number = 1;

   result:any = [];

   loggedin:boolean;
   constructor(private router: Router,public toastr: ToastsManager, private session: SessionService,vcr: ViewContainerRef, private dataservice:DataOpService){


    this.toastr.setRootViewContainerRef(vcr);
    this.courseOffering= [];
   }

   ngOnInit(){
        if(this.session.getSession()){
      this.loggedin=true;
    }
   }

    log(x){
      console.log(x);
    }

    showSuccess() {
        var self = this
        this.toastr.success('Tutor Added !', 'Success!');
        setTimeout(function(){self.back()},1000);
      }

    showFailure(){
        this.toastr.error("Tutor not Added, Something went wrong ");
    }



  display(){
        var self =this;
        this.course.forEach((course)=>{
              this.courseOffering.push(course.cno + " " + course.cname);
        });
        console.log(this.course);
        this.dataservice.setTutorCourseData(this).subscribe(function(resp){
           if(resp.status == 202){
                  self.showSuccess();
              }
        })
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

  logout(){
    localStorage.removeItem("user");
    console.log("localstorage is",localStorage.getItem("user"));
    this.router.navigate(['']);
  }

}
