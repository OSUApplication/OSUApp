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

  timeslot:any = {"StudentId":"","TutorId":"","date":"","startTime":"","endTime":"","confirmed":""};
  user:any;
  data : any;
  department: any;
  sub:any;
  id:any;
  type:any;
  istutor:boolean;
  stimeslot:any;
  ttimeslot:any;
  availability:any;
  subj:any;
  constructor(private route: ActivatedRoute,private router: Router, private session:SessionService, private datasource:DataOpService){
       this.user=this.session.getSession();

       console.log(this.user);
     }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.type = params['type']; 
       this.subj = decodeURI(params['course']);
       console.log("subject is",this.subj);
       
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
           console.log("ttimeslot is",this.ttimeslot);  
         })
       }

       // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
      var self = this;
     this.datasource.getTutorAvailableDates(this.id).subscribe(data=>{
       console.log("data is ",data);
      self.availability = data;
      console.log("availability:",self.availability);

    });
      console.log("this type is",this.istutor);
      var timesl = {"date":"","StudentId":"","TutorId":""};
  }


  back(){
    this.router.navigate(['/']);
  }

  createTimeSlot(start:Date,end:Date,confirmed:any){
    console.log(this.user);
    var endtime = new Date(end);
    var starttime= new Date(start);

     this.timeslot["StudentId"]=this.user['uid'];
    this.timeslot["TutorId"]=this.id;
    this.timeslot["endTime"] = endtime.toLocaleTimeString();
    this.timeslot["confirmed"]=false;
    this.timeslot["startTime"]= starttime.toLocaleTimeString();
    this.timeslot['date'] = starttime.toLocaleDateString();
    this.timeslot['course'] = this.subj;

    console.log("timeslot is",this.timeslot);
    this.datasource.createTimeSlot(this.timeslot);

  }

  dropdownValue(val: any) {
    this.department = val.toLowerCase();
  }


}
