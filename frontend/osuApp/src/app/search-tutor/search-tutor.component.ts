import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';
import {FilterPipe} from '../filter.pipe';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "../login/login.component"

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css'],
})

export class SearchTutorComponent implements OnInit {
  tutors = [];
  data : any;
  department: any;
  closeResult: string;

  constructor(private router: Router, private session:SessionService, private datasource:DataOpService, private modalService: NgbModal){
   this.datasource.getAllUserData().subscribe(posts => {this.data = posts; (this.data).forEach(variable => {
      if(variable.tutorAs == true ){
        this.tutors.push(variable);
      }
      });
      });
    }

  ngOnInit() {
    return this.tutors;
  }


  back(){
    this.router.navigate(['/']);
  }


  dropdownValue(val: any) {
    this.department = val.toLowerCase();
  }

  open(content,modal) {
    content = this.tutors
    console.log("hasd");
   this.modalService.open(modal);
 }

}
