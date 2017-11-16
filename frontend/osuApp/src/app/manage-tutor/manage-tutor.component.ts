import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';
import {FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-manage-tutor',
  templateUrl: './manage-tutor.component.html',
  styleUrls: ['./manage-tutor.component.css']
})
export class ManageTutorComponent implements OnInit {

  user:any;
  data : any;
  department: any;
   constructor(private router: Router, private session:SessionService, private datasource:DataOpService){
       this.user=this.session.getSession();
       console.log(this.user);
     }

  ngOnInit() {

  }


  back(){
    this.router.navigate(['/']);
  }

  dropdownValue(val: any) {
    this.department = val.toLowerCase();
  }

}
