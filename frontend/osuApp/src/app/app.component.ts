import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {DataOpService} from './data-op.service';
import { SessionService } from './session.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  public loggedin:boolean; 
  public logpage:boolean=false;

  public onLogPage(val:boolean)
  {
     this.logpage = val;
     console.log("logpage in app is",val);
  }

  constructor(private http: Http,private router: Router, private session:SessionService){
  		
  }
  
  ngOnInit() {

     if(this.session.getSession()){
      this.loggedin=true;
    }
     }

  logout(){
    console.log("entered logout");  
    localStorage.removeItem("user");
    console.log("localstorage is",localStorage.getItem("user"));
    this.router.navigate(['']);
  }


}
