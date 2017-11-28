import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { RouterModule,Router } from '@angular/router';
import { DataOpService } from '../data-op.service';
import { SessionService } from '../session.service';
import {RegFilterPipe} from '../regSelectFilter.pipe';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { CalendarTestComponent } from './calendar-test.component';
import { CalendarModule } from 'angular-calendar';
import { Component, OnInit,ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
import {FilterPipe} from '../filter.pipe';
import { ActivatedRoute } from '@angular/router';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CalendarTestComponent', () => {
  let component: CalendarTestComponent;
  let fixture: ComponentFixture<CalendarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTestComponent ],
      imports:[FormsModule, HttpModule, HttpClientTestingModule, RouterTestingModule, ToastModule.forRoot(),NgbModalModule.forRoot(),
       NgbDatepickerModule.forRoot(),
       NgbTimepickerModule.forRoot(),CalendarModule.forRoot(),BrowserAnimationsModule],
      providers:[DataOpService,SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
