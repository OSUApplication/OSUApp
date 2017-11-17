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

  timeslot:any = {"id":"","StudentId":"","TutorId":"","Date":"","startTime":"","endTime":"","confirmed":""};
  user:any;
  data : any;
  department: any;

  constructor(private router: Router, private session:SessionService, private datasource:DataOpService){
       this.user=this.session.getSession();

       console.log(this.user);
     }

  ngOnInit() {
      var timesl = {"date":"","StudentId":"","TutorId":""};
  }


  back(){
    this.router.navigate(['/']);
  }

  creatTimeSlot(id:string,student:any,tutor:any,date:any,start:any,end:any,confirmed:any){
    this.timeslot["id"]=id;
    this.timeslot["student"]=student;
    this.timeslot["tutor"]=tutor;
    this.timeslot["date"]=date;
    this.timeslot["endTime"] = end;
    this.timeslot["confirmed"]=confirmed;
    this.timeslot["startTime"]= start;

    this.datasource.createTimeSlot(this.timeslot);

  }

  dropdownValue(val: any) {
    this.department = val.toLowerCase();
  }

}
