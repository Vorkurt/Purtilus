import { TestBed } from '@angular/core/testing';

import { PlBillingResolver } from './pl-billing.resolver';

describe('PlBillingResolver', () => {
  let resolver: PlBillingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlBillingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
