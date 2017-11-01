import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  loggedin:boolean;

  constructor(private router: Router, private session:SessionService) { }

  ngOnInit() {
       if(this.session.getSession()){
      this.loggedin=true;
    }
  }

}
