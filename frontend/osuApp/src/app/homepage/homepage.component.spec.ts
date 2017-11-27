import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataOpService } from '../data-op.service';


describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports: [RouterTestingModule,FormsModule, HttpModule, HttpClientTestingModule, ToastModule.forRoot()],
      providers:[SessionService,DataOpService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem("user", "{}");
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
