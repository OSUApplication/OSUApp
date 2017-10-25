import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { Student } from './student';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {ToastModule, ToastsManager} from 'ng2-toastr/ng2-toastr';
import { RouterModule,Router } from '@angular/router';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { DataOpService} from '../data-op.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  [x: string]: any;

  public model: Student;
  
     name:string = "";
  
     course:any[] = [{'id': 1,'cno':'','cname':''}];
  
     id:number = 1;
  
     result:Array<any> = [];
  
     constructor(private router: Router, private http : Http,public toastr: ToastsManager, vcr: ViewContainerRef, private dataservice:DataOpService){
      
          this.toastr.setRootViewContainerRef(vcr);
      
                   
         }

       
  ngOnInit() {

    var self  = this;
    let headers = new Headers();


  }
  showSuccess() {
   this.router.navigate(['']);
  }

  display(){
            
            var self = this;
            let headers = new Headers();
            headers.append('Access-Control-Allow-Origin','http://localhost:4200');
            headers.append('Content-Type','application/json');
            headers.append('Access','application/json');
  
            this.dataservice.setRegistrationData(this).subscribe(function(resp){
              if(resp.status == 201){
                  self.showSuccess();
              }
             });

        }

    
      back(){
        this.router.navigate(['']);
      }
}
