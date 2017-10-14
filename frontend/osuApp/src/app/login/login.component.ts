import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login_user(){
    this.router.navigate(['homepage']);
  }

  register_user(){
    //add the register form link instead of "homepage" below

    //this.router.navigate(['homepage']);
  }


}
