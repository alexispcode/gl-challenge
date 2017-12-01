import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoadingIndicatorInterceptor } from './loading-interceptor.service';
import { LoadingIndicatorService } from './loading-indicator.service';

describe('LoadingInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoadingIndicatorInterceptor, LoadingIndicatorService]
    });
  });

  it('should be created', inject([LoadingIndicatorInterceptor], (service: LoadingIndicatorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
