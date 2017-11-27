import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SessionService } from './session.service';

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService],
      imports: [HttpModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
