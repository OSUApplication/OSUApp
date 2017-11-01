import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { SessionService } from '../session.service';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  feedback:string = ""
  firstname:string = ""
  lastname:string = ""
  loggedin:boolean;

  constructor(private router: Router, private session:SessionService) { }

  ngOnInit() {
       if(this.session.getSession()){
      this.loggedin=true;
    }
  }

  submit(){
  	console.log(this.firstname, this.lastname, ", feedback: ",this.feedback);
  }

}
