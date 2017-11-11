import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {ToastModule, ToastsManager} from 'ng2-toastr/ng2-toastr';
import { RouterModule,Router } from '@angular/router';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { DataOpService} from '../data-op.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  email:String = ""
  password:String = ""
  name:String = ""

 constructor(private vcr: ViewContainerRef,
             private router: Router,
             private toastr: ToastsManager,
             private dataservice:DataOpService) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  showSuccess() {
   this.router.navigate(['']);
  }

  submit() {
      var self = this;

      this.dataservice.signup(this.email, this.password).subscribe(function(resp){
          if(resp.status == 201){
              self.showSuccess();
          }
       });
  }

  back(){
    this.router.navigate(['']);
  }
}
