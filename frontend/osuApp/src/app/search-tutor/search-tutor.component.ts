import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';
//import { FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css'],
})

export class SearchTutorComponent implements OnInit {
  tutors = [];
  data : any;
  department: any;

  constructor(private router: Router, private session:SessionService, private datasource:DataOpService){
    this.datasource.getAllUserData().subscribe(posts => {this.data = posts; (this.data).forEach(variable => {
      if(variable.tutorAs == true ){
        this.tutors.push(variable);
      }
      });

      });
    }

  loggedin:boolean;


  ngOnInit() {
       if(this.session.getSession()){
      this.loggedin=true;
      }
    return this.tutors;
  }


  back(){
    this.router.navigate(['/']);
  }

  dropdownValue(val: any) {
    this.department = val.toLowerCase();
  }

  submit(){

  }

  logout(){
    localStorage.removeItem("user");
    console.log("localstorage is",localStorage.getItem("user"));
    this.router.navigate(['']);
  }
}
