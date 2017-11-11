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
  luser:string;
  lpass:string;
  signbody:any = {"name":"","email":"","password":""};
  loginbody:any={"email":"","password":""};
  tokenUrl:string = "http://localhost:8084/osu/oauth/token?grant_type=password";
  username:string;
  password:string;

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
     this.createLoginBody();

     this.getToken().subscribe(function(resp){
       this.result = resp;
       this.result = JSON.parse(this.result._body);
       self.session.setSession(this.result);
     })
  }

  signup(){
    var self = this;
    this.createSignBody();
    console.log("body is ",this.body);
    this.dataservice.setRegistrationData(this.body).subscribe(function(resp){
      if(resp.status == 201){
          self.showSuccess();
      }
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

  createSignBody(){
    this.signbody.name=this.name;
    this.signbody.email=this.email;
    this.signbody.password=this.password;

  }

  createLoginBody(){
    this.loginbody.name=this.luser;
    this.loginbody.password=this.lpass;
  }

   getToken(){  
      let username: string = this.loginbody.name;
      let password: string = this.loginbody.password;
      this.tokenUrl = this.tokenUrl+"&username="+username+"&password="+password;
      let headers: Headers = new Headers({"Authorization":"Basic YWNtZTpzZWNyZXQ="});
      return this.http.post(this.tokenUrl, {}, {headers: headers});
/*       return this.http.post('http://localhost:8084/osu/oauth/token?grant_type=password&username=test@oregonstate.edu&password=password',{ headers:{"Authorization":"Basic YWNtZTpzZWNyZXQ="}});
*/  }
}
