import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { TutorRegistrationComponent } from './tutor-registration.component';
import { Tutor } from './tutor';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { RouterModule,Router } from '@angular/router';
import { DataOpService } from '../data-op.service';
import { SessionService } from '../session.service';
import {RegFilterPipe} from '../regSelectFilter.pipe';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';

describe('TutorRegistrationComponent', () => {
  let component: TutorRegistrationComponent;
  let fixture: ComponentFixture<TutorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorRegistrationComponent, RegFilterPipe],
      imports:[FormsModule, HttpModule, HttpClientTestingModule, RouterTestingModule, ToastModule.forRoot()],
      providers:[DataOpService,SessionService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const dataOpService = TestBed.get(DataOpService);
    const http = TestBed.get(HttpTestingController);
    // fake response
    // const expectedCourse = [{ name: 'CS' }];
    // //
    // let actualUsers = [];
    // dataOpService.getCourses().subscribe(users => {
    //   actualUsers = users;
    // });

    // http.expectOne('http://localhost:8084/osu/api/getCourses').flush(expectedCourse);


    expect(component).toBeTruthy();
  });
});
