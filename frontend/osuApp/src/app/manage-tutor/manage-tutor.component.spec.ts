import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTutorComponent } from './manage-tutor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '../session.service';
import { DataOpService } from '../data-op.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageTutorComponent', () => {
  let component: ManageTutorComponent;
  let fixture: ComponentFixture<ManageTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTutorComponent ],
      imports: [RouterTestingModule, HttpModule, HttpClientTestingModule],
      providers:[SessionService, DataOpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem("user", "{}");
    fixture = TestBed.createComponent(ManageTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
