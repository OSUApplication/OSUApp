import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css']
})
export class SearchTutorComponent implements OnInit {
  subjects:string[]
  x:object={}

  constructor(private router: Router){}

  ngOnInit() {
    this.subjects =["ECE","CS","Civil","Mechanical"]
  }

  back(){
    this.router.navigate(['/']);
  }

  dropdownValue(val: any) {
    console.log(val);
  }

  submit(){

    this.x['department_name'] = (document.getElementById("button") as HTMLInputElement).value;
    //this.x['subject_name'] = document.getElementById("search_tutor_id").value();

    console.log("Hello");
  }
}
