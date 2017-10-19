import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { TutorRegistrationComponent } from './tutor-registration.component';
import { Tutor } from './tutor';
import { HttpModule } from '@angular/http';
import { Http,URLSearchParams, Headers } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { RouterModule,Router } from '@angular/router';

describe('TutorRegistrationComponent', () => {
  let component: TutorRegistrationComponent;
  let fixture: ComponentFixture<TutorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorRegistrationComponent ],
      imports:[FormsModule, HttpModule, RouterTestingModule, ToastModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
