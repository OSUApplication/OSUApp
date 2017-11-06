import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataOpService } from "../data-op.service"

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css']
})
export class SearchTutorComponent implements OnInit {
  subjects:string[]
  //private tutors

  constructor(private router: Router, private service:DataOpService){
    //this.tutors=[]
  }

  ngOnInit() {

    this.subjects =["ECE","CS","Civil","Mechanical"]
    //this.tutors=[]
     var tutors = this.service.getAllUserData();
    //this.tutors=["shashank","billy"]
    //  for (let i in tutors){
    //    let j=tutors[i]
    //    console.log(j)
    //  }
    console.log(tutors);
  }


  back(){
    this.router.navigate(['/']);
  }

  dropdownValue(val: any) {
    console.log(val);
  }

  submit(){
    console.log("Hello");
  }
}
