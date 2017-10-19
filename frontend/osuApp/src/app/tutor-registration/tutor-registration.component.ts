import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';
import { Router } from '@angular/router';
import { Http,URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Jsonp} from '@angular/http';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


  


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

   course:any[] = [{'id': 1,'cno':'','cname':''}];

   courseOffering:any[] = [];

   id:number = 1;

   result:any = [];

   constructor(private router: Router, private http : Http,public toastr: ToastsManager, vcr: ViewContainerRef){

    this.toastr.setRootViewContainerRef(vcr);

             
   }
   
   ngOnInit(){

    var self  = this;
    let headers = new Headers();

    headers.append('Access-Control-Allow-Origin','http://localhost:4200');
    this.http.get('http://localhost:8084/api/getAllUsers',{ headers : headers}).map((response)=>response.json()).subscribe(
        function(data){
            this.result=data;
            console.log(this.result);
        }
      )
   }

    log(x){
      console.log(x);
    }

    showSuccess() {
        this.toastr.success('Tutor Added !', 'Success!');
      }

    showFailure(){
        this.toastr.error("Tutor not Added, Something went wrong ");
    }
  
  display(){


        this.course.forEach((course)=>{
              this.courseOffering.push(course.cno + " " + course.cname);
        });

        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin','http://localhost:4200');
        headers.append('Content-Type','application/json');
        headers.append('Access','application/json');

        
        let postBody = JSON.stringify({"name" : this.name, "email" : this.email, "department" : "cs","tutorAs":"true","courseOffering":this.courseOffering});
        this.http.post('http://localhost:8084/api/addUser',postBody, {
        headers:headers
        }).subscribe((data)=>{
            console.log(data);
            var data = data;
            this.showSuccess();
        }
      )



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
