import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css']
})
export class SearchTutorComponent implements OnInit {
  subjects:string[];
  tutors = [];
  data : any;
  department: any;
  add_back_tutors=[]

  constructor(private router: Router, private session:SessionService, private datasource:DataOpService){
      this.datasource.getAllUserData().subscribe(posts => {this.data = posts; console.log(this.data);(this.data).forEach(variable => {
        if(variable.tutorAs == true ){
          this.tutors.push(variable);
        }
      });
      console.log(this.tutors);
    });

  }

  loggedin:boolean;

  ngOnInit() {
       if(this.session.getSession()){
      this.loggedin=true;
      }
    this.subjects =["ECE","CS","Civil","Mechanical"];
    return this.tutors;
  }


  back(){
    this.router.navigate(['/']);
  }

  dropdownValue(val: any) {
    this.department = val.toLowerCase();
    
  }




  submit(){
    console.log("Hello");
  }
}
