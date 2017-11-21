//import { Component, OnInit } from '@angular/core';
import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {DayPilotCalendarComponent} from "daypilot-pro-angular";
import {DataService} from "./data.service";

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.css']
})
export class StudentCalendarComponent implements AfterViewInit {

  @ViewChild("calendar")
  calendar: DayPilotCalendarComponent;


  config: any = {
    viewType: "Week",
    startDate: "2017-05-01",
  };

  events: any[] = [];

  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    var from = this.calendar.control.visibleStart();
    var to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

}
