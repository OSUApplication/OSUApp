import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent implements OnInit {

   public model: Tutor;

   name:string = "Shashank"


   constructor(){
       this.model = new Tutor();
       this.model.name = "Tutor 1";
   }

   ngOnInit() {

  	  console.log("THe model value is",this.model.name);
  }

  display(name){
  			console.log("name is",name);
  }

  log(x){
  console.log(x);
  }
}
