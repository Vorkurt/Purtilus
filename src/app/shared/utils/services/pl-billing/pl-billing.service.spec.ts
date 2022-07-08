import { TestBed } from '@angular/core/testing';

import { PlBillingService } from './pl-billing.service';

describe('PlBillingService', () => {
  let service: PlBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
