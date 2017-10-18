import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Jsonp} from '@angular/http';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public model: Student;
  
     name:string = "";
  
     course:any[] = [{'id': 1,'cno':'','cname':''}];
  
     id:number = 1;
  
     result:Array<any> = [];
  
     constructor(private router: Router, private http : Http){

     }

  ngOnInit() {

    this.http.get('http://localhost:8084/api/getAllUsers').map((response)=>response.json()).subscribe(
      function(data){
          this.result=data;
          console.log(this.result);
      }
    )
  }
  back(){
    this.router.navigate([''])
  }
  submit(){
    this.router.navigate(['/search-tutor'])
  }
}