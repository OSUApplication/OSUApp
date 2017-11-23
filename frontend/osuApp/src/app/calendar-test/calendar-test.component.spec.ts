import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTestComponent } from './calendar-test.component';

describe('CalendarTestComponent', () => {
  let component: CalendarTestComponent;
  let fixture: ComponentFixture<CalendarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTestComponent ]
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
