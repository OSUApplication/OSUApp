import { RouterModule,Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { DataOpService} from '../data-op.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loggedin:boolean;
  [x: string]: any;
  name:string = "";
  course:any[] = [{'id': 1,'cno':'','cname':''}];
  id:number = 1;
  result:Array<any> = [];

  constructor(
    private router: Router,
    private session: SessionService,
    private http : Http,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private dataservice:DataOpService) { }

  ngOnInit() {
    let headers = new Headers();
    if(this.session.getSession()){
      this.loggedin=true;
    }
  }


  register_tutor(){
    this.router.navigate(['/tutor-registration']);
  }

  search_tutor(){
    this.router.navigate(['/search-tutor'])
  }

  // login functions

  login(){
     var self = this;
     this.session.setSession().then(function(){
     console.log(self.session.getSession());
     self.router.navigate(['home']);
    });
  }

  // animations

  flip(){
    var content = document.getElementById('f1_card');
    content.classList.toggle('flip');
  }

  showSuccess() {
   this.router.navigate(['']);
  }


}
