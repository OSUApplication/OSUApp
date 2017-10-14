import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  feedback:string = ""
  firstname:string = ""
  lastname:string = ""

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(){
  	console.log(this.firstname, this.lastname, ", feedback: ",this.feedback);
  }

}
