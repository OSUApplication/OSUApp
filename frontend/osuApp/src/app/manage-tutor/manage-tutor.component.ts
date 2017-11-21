import { Component, OnInit,ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';
import {FilterPipe} from '../filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

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
  sub:any;
  id:any;
  type:any;
  istutor:boolean;
  stimeslot:any;
  ttimeslot:any;

  constructor(private route: ActivatedRoute,private router: Router, private session:SessionService, private datasource:DataOpService){
       this.user=this.session.getSession();

       console.log(this.user);
     }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.type = params['type']; 
       
       if(this.type=='student'){
         this.istutor=false;
         this.datasource.getTimeSlotForStudent(this.id).subscribe(data=>{
           this.stimeslot = data;
           console.log("student timeslots are ",data);
         });
       }
       else{
         this.istutor=true;
         this.datasource.getTimeSlotForTutor(this.id).subscribe(data=>{
           this.ttimeslot=data;
         })
       }

       // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
      console.log("this type is",this.istutor);
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
