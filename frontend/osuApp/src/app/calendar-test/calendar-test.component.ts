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

  modalDataNew:any;

  modalRef:any;

  date: Date;

  sub:any;
  type:any;

  reqDate:Array<Date>;

  myRadio:string;
  self = this;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  constructor(private modal: NgbModal,private route: ActivatedRoute) {}

 ngOnInit() {
   this.startTimeStruct = {hour:9, minute:0,second:0};
   this.endTimeStruct =   {hour:12, minute:0,second:0};

    this.sub = this.route.params.subscribe(params => {
      this.type = params['type'];
    }
      )
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

  check(modalContent){
    
  
        if(this.myRadio == "one"){
          this.addEvent();
        }
        else{
          this.addEventRepeat();
        }
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
      start: this.addStartEventTime(new Date(this.modalDataNew.selected)),
      end: this.addEndEventTime(new Date(this.modalDataNew.selected)),
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

  addStartEventTime(date:Date){

   var startdate = date;
   console.log("start time struct is ",this.startTimeStruct.hour);
   startdate.setHours(startdate.getHours()+this.startTimeStruct.hour);
   startdate.setMinutes(startdate.getMinutes()+this.startTimeStruct.minute);
   console.log("test is",startdate.getHours());
   
   return startdate;
  }

  addEndEventTime(date:Date){
   var enddate = date;
   enddate.setHours(enddate.getHours()+this.endTimeStruct.hour);
   enddate.setMinutes(enddate.getMinutes()+this.endTimeStruct.minute);
   return enddate;
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

}
