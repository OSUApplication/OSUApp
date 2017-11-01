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
  loggedin:boolean; 

  constructor(private http: Http,private router: Router, private session:SessionService){
  		
  }
  
  ngOnInit() {
    console.log("logged value is",this.loggedin);
     if(this.session.getSession()){
      this.loggedin=true;
    }
     }


}
