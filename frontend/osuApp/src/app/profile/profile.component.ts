import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {

  name:String;
  email:String;
  department:String;
  tutors=[];


  constructor(private router : Router) { }


  ngOnInit() {

  }

  profiledata(data){
    this.name=data.name
    this.email = data.email
    this.department = data.department

    console.log(this.name);
  }


  back(){
    this.router.navigate(['/search-tutor'])
  }
}
