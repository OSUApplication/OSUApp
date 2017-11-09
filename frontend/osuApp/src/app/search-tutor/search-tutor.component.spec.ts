import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { SearchTutorComponent } from './search-tutor.component';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {DataOpService} from '../data-op.service';
import {FilterPipe} from '../filter.pipe'


describe('SearchTutorComponent', () => {
  let component: SearchTutorComponent;
  let fixture: ComponentFixture<SearchTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTutorComponent, FilterPipe],
      imports: [RouterTestingModule,FormsModule,HttpModule],
      providers:[SessionService, DataOpService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
