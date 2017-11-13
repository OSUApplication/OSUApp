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
import { forwardRef, Inject, Injector, EventEmitter, Input, Output} from '@angular/core';


import 'rxjs/add/operator/catch';


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
  email:string;
  password:string;
  @Input() logpage: boolean;
  @Output() onLogPage = new EventEmitter<boolean>();

  constructor(
    public injector:Injector,
    private router: Router,
    private session: SessionService,
    private http : Http,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private dataservice:DataOpService,
    ) {

        this.toastr.setRootViewContainerRef(vcr);


    }

  ngOnInit() {

     console.log("logpage is ",this.logpage);
     this.onLogPage.emit(true);
    let headers = new Headers();

    if(localStorage.getItem("user")){
      console.log(localStorage.getItem("user"));
      this.back();
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

     this.getToken().subscribe(data => {
       var result = JSON.parse(JSON.stringify(data["_body"]));

       self.session.setSession(result,self.loginbody.name).then(function(data){
         if(data){
             self.showSuccess();
          }
         else{
             self.showFailure();
         }

       });


     },
     error => {
         self.showFailure();
     });

  }

  signup() {
      var self = this;

      this.dataservice.signup(this.email, this.password, this.name).subscribe(function(resp){
          if(resp.status == 201){
              self.toastr.success('Sign Up Completed', 'Success!');
              self.flip();
          }
       });
  }


  // animations

  flip(){
    var content = document.getElementById('f1_card');
    content.classList.toggle('flip');
  }

  showSuccess() {
   var self = this
   this.toastr.success('Logged In !');
   setTimeout(function(){self.back();},1000);
  }

  showFailure(){
   this.toastr.error("Invalid Credentials, Please Log in Again");
   console.log("Invalid User Credentials");
   this.tokenUrl= "http://localhost:8084/osu/oauth/token?grant_type=password";
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
      var self = this;
      let username: string = this.loginbody.name;
      let password: string = this.loginbody.password;
      this.tokenUrl = this.tokenUrl+"&username="+username+"&password="+password;
      console.log("token url is",this.tokenUrl);
      let headers: Headers = new Headers({"Authorization":"Basic YWNtZTpzZWNyZXQ="});
      return this.http.post(this.tokenUrl, {}, {headers: headers});

}

  back(){
    this.router.navigate(['/home']);
  }
  log(event){
    console.log(event);
  }
}
