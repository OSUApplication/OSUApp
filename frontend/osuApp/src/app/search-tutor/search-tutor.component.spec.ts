import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { SearchTutorComponent } from './search-tutor.component';

import { Router } from '@angular/router';


describe('SearchTutorComponent', () => {
  let component: SearchTutorComponent;
  let fixture: ComponentFixture<SearchTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTutorComponent ],
      imports: [RouterTestingModule,FormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
