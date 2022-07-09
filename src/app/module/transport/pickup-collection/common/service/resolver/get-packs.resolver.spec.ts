import { TestBed } from '@angular/core/testing';

import { GetPacksResolver } from './get-packs.resolver';

describe('GetPacksResolver', () => {
  let resolver: GetPacksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetPacksResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
