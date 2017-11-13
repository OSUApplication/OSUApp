import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTutorComponent } from './manage-tutor.component';

describe('ManageTutorComponent', () => {
  let component: ManageTutorComponent;
  let fixture: ComponentFixture<ManageTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
