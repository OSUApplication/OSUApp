import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { FilterPipe }from '../filter.pipe';

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css']
})
export class SearchTutorComponent implements OnInit {
  subjects:string[]
  tutors:string[]


  constructor(private router: Router, private session:SessionService){}
  loggedin:boolean;
  ngOnInit() {
       if(this.session.getSession()){
      this.loggedin=true;
    }
    this.subjects =["ECE","CS","Civil","Mechanical"];
    this.tutors=["Shashank","billy","prathveer"];
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
