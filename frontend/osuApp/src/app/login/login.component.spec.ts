import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginComponent } from './login.component';
import { SessionService } from '../session.service';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { DataOpService } from '../data-op.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,FormsModule,HttpModule,ToastModule.forRoot()],
      providers:[SessionService,DataOpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
