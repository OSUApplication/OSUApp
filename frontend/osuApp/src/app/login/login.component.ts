import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private session: SessionService, private router:Router) { }

  ngOnInit() {
  }

  login(){
     var self = this;
     this.session.setSession().then(function(){
     console.log(self.session.getSession());
     self.router.navigate(['home']);
    });
  }
}
