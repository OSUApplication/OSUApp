import { RouterModule,Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Student } from './student';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { DataOpService} from '../data-op.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  loggedin:boolean;
  [x: string]: any;
  public model: Student;
  name:string = "";
  course:any[] = [{'id': 1,'cno':'','cname':''}];
  id:number = 1;
  result:Array<any> = [];
  user:any;

  constructor(
    private router: Router,
    private session: SessionService,
    private http : Http,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private dataservice:DataOpService) { }

  ngOnInit() {
    let headers = new Headers();
    if(!this.session.getSession()){
      this.router.navigate([""]);
    }
    else{
      this.user = this.session.getSession();
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
   
  }

  logout(){
    localStorage.removeItem("user");
    console.log("localstorage is",localStorage.getItem("user"));
    this.router.navigate(['']);
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
