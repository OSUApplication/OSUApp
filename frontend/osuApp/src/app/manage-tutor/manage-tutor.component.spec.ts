import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTutorComponent } from './manage-tutor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '../session.service';
import { DataOpService } from '../data-op.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

describe('ManageTutorComponent', () => {
  let component: ManageTutorComponent;
  let fixture: ComponentFixture<ManageTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTutorComponent ],
      imports: [RouterTestingModule, HttpModule, HttpClientTestingModule,  ToastModule.forRoot()],
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

});
