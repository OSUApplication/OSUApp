import { TestBed, inject } from '@angular/core/testing';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { DataOpService } from './data-op.service';
import { HttpModule } from '@angular/http';

describe('DataOpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataOpService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([DataOpService], (service: DataOpService) => {
    expect(service).toBeTruthy();
  }));
});
