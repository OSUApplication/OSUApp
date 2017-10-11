import { Component, OnInit } from '@angular/core';
import { Tutor } from './tutor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.css']
})
export class TutorRegistrationComponent implements OnInit {

   public model: Tutor;

   name:string = "Shashank"


   constructor(private router: Router){
       this.model = new Tutor();
       this.model.name = "Tutor 1";
   }

   ngOnInit() {
  	  console.log("THe model value is",this.model.name);
  }

  display(name){
  			console.log("name is",name);
  }

  back(){
    this.router.navigate(['/']);
  }
}
