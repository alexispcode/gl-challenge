import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoadingIndicatorService } from './loading-indicator.service';

describe('LoadingIndicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoadingIndicatorService],
    });
  });

  it('should be created', inject([LoadingIndicatorService], (service: LoadingIndicatorService) => {
    expect(service).toBeTruthy();
  }));
});
