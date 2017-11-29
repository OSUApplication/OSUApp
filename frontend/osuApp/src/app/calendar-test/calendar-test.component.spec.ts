import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { RouterModule,Router } from '@angular/router';
import { DataOpService } from '../data-op.service';
import { SessionService } from '../session.service';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerModule,NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarTestComponent } from './calendar-test.component';
import { CalendarModule } from 'angular-calendar';
import { Component, OnInit,ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('CalendarTestComponent', () => {
  let component: CalendarTestComponent;
  let fixture: ComponentFixture<CalendarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTestComponent ],
      imports:[FormsModule, HttpModule, HttpClientTestingModule, RouterTestingModule,NgbModalModule.forRoot(),
       NgbDatepickerModule.forRoot(),NgbTimepickerModule.forRoot(),CalendarModule.forRoot(),BrowserAnimationsModule],
      providers:[ DataOpService,SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTestComponent);
    localStorage.setItem("user", "{}");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',() => {
    expect(component).toBeTruthy();
  });
});
