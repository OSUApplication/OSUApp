import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {


  constructor(private router : Router) { }



  ngOnInit() {
  }

  back(){
    this.router.navigate(['/search-tutor'])
  }
}
