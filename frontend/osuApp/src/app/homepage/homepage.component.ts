import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  loggedin:boolean;
  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
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

  sign_up(){
    this.router.navigate(['/sign-up'])
  }

  login(){
     var self = this;
     this.session.setSession().then(function(){
     console.log(self.session.getSession());
     self.router.navigate(['home']);
    });
  }

}
