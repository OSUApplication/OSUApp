import { TestBed, inject } from '@angular/core/testing';
import { Http,URLSearchParams, Headers } from '@angular/http';
import { DataOpService } from './data-op.service';
import { HttpModule } from '@angular/http';
import { SessionService } from './session.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataOpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataOpService, SessionService],
      imports: [HttpModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([DataOpService], (service: DataOpService) => {
    expect(service).toBeTruthy();
  }));
});
