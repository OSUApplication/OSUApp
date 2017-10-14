import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css']
})
export class SearchTutorComponent implements OnInit {
  subjects:string[]

  constructor(private router: Router){}

  ngOnInit() {
    this.subjects =["ECE","CS","Civil","Mechanical"]
  }

  back(){
    this.router.navigate(['homepage']);
  }

  dropdownValue(val: any) {
    console.log(val);
  }

  submit(){
    console.log("Hello");
  }
}
