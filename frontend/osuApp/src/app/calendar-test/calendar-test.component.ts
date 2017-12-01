import { Component, OnInit,ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';
import {FilterPipe} from '../filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs/Subject';

  import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import {
  getSeconds,
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  setSeconds,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setYear
} from 'date-fns';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.css']
})
export class CalendarTestComponent implements OnInit {




 @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  startTimeStruct: NgbTimeStruct;

  endTimeStruct: NgbTimeStruct;

  id:any;

  preevents:any;

  modalDataNew:any;

  modalRef:any;

  startdate:Date;
  enddate:Date;

  eventstartdate:Date;
  eventenddate:Date;

  date: Date;

  initstartdate: Date;
  initenddate:Date;

  sub:any;
  type:any;

  sessiontutor:any;
  reqDate:Array<Date>;

  myRadio:string;
  self = this;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  constructor(private router: Router,private session: SessionService,public toastr: ToastsManager,vcr: ViewContainerRef,private modal: NgbModal,private route: ActivatedRoute, private datasource:DataOpService) {
        this.toastr.setRootViewContainerRef(vcr);

  }

 ngOnInit() {
   this.startTimeStruct = {hour:9, minute:0,second:0};
   this.endTimeStruct =   {hour:12, minute:0,second:0};

   this.sessiontutor = this.session.getSession();
    this.sub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = params['id'];
      console.log("id is ",this.id);

    }
      )

    var self = this;
    this.datasource.getTutorAvailableDates(this.sessiontutor['uid']).subscribe(data=>{
        data.forEach(function(date){
             var st_date = new Date(date.startdate);
             var end_date = new Date(date.enddate);

             self.initstartdate = new Date(st_date);
             self.initenddate = new Date(end_date);
             console.log("initdate is ",self.initenddate);

             self.addInitEvent();
        });
    }, function(error) {});
       }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

   showConflictFailure(){
        this.toastr.error("Time Conflict Detected, Cannot Register Slot");
    }

  check(modalContent){

        console.log("Modal this data is",this.modalDataNew.selected,this.startTimeStruct,this.endTimeStruct);

        this.eventstartdate = this.createDateTime(this.modalDataNew.selected,this.startTimeStruct);
        this.eventenddate = this.createDateTime(this.modalDataNew.selected,this.endTimeStruct);

        var conflict =  this.checkTimeConflict(this.eventstartdate,this.eventenddate,this.preevents);
/*        if(this.myRadio == "one"){
*/         
            if(!conflict)
            {
              this.addEvent();
            }
            else{

              this.showConflictFailure();

            }
        /*}
        else{
          this.addEventRepeat();
        }*/
       this.modalRef.close();
  }
  events: CalendarEvent[] = [
  ];
  private onChangeCallback: (date: Date, enddate:Date) => void = () => {};

  activeDayIsOpen: boolean = true;


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log("date is",date);
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
     this.preevents = this.events.slice(0);
    }

    this.handleDayEvent("addday",date);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }


  handleDayEvent(action: string, date:Date): void {
     var selected=  date.toDateString();

    this.modalDataNew = {action, selected};
    this.modalRef = this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: this.eventstartdate,
      end: this.eventenddate,
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
    });

    this.refresh.next();
    this.datasource.setTutorAvailableDate({tutorId:this.sessiontutor['uid'],startdate:this.eventstartdate,enddate:this.eventenddate});

  }

  addInitEvent(){
      this.events.push({
      title: 'New event',
      start: new Date(this.initstartdate),
      end: new Date(this.initenddate),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
    });
    this.refresh.next();
  }

  addEventRepeat():void{


  }

  createDateTime(date,time){
    var dateTime = new Date(date);
    dateTime.setHours(dateTime.getHours()+time.hour);
    dateTime.setMinutes(dateTime.getMinutes()+time.minute);

    return dateTime;
  }

  checkTimeConflict(starttime:Date,endtime:Date ,events){
    console.log("preevent",events);
    var check = false;
    if(events.length > 0){
      events.forEach(function(event){
       console.log("starttime date and event date is",starttime.getTime(),endtime.getTime(),event.start.getTime(),event.end.getTime());
       (starttime.getTime() >= event.start.getTime() && starttime.getTime() <= event.end.getTime())? check = true: check = false;               
       (endtime.getTime() >= event.start.getTime() && endtime.getTime() <= event.end.getTime())? check = true: check = false;                          
    });
    return check;
  }
    else{
      return false;
    }
  }

  addStartEventTime(date:Date){

   this.startdate = date;
   console.log("start time struct is ",this.startTimeStruct.hour);
   this.startdate.setHours(this.startdate.getHours()+this.startTimeStruct.hour);
   this.startdate.setMinutes(this.startdate.getMinutes()+this.startTimeStruct.minute);
   return this.startdate;
  }

  addEndEventTime(date:Date){
   this.enddate = date;
   this.enddate.setHours(this.enddate.getHours()+this.endTimeStruct.hour);
   this.enddate.setMinutes(this.enddate.getMinutes()+this.endTimeStruct.minute);

   return this.enddate;
  }

  deleteTimeSlot(event){
    var startdate = new Date(event.start);
    var enddate = new Date(event.end);

    this.datasource.deleteTutorAvailableDate(this.sessiontutor['uid'],startdate,enddate).subscribe(data =>
      console.log(data));
  }
  updateTime(): void {
    const newDate: Date = setHours(
      setMinutes(
        setSeconds(this.date, this.startTimeStruct.second),
        this.startTimeStruct.minute
      ),
      this.startTimeStruct.hour
    );
     const newEndDate: Date = setHours(
      setMinutes(
        setSeconds(this.date, this.endTimeStruct.second),
        this.endTimeStruct.minute
      ),
      this.endTimeStruct.hour
    );
    this.onChangeCallback(newDate,newEndDate);
  }

  back(){
    this.router.navigate(['/manageTutor',this.sessiontutor['uid'],"none","tutor"]);
  }
}
