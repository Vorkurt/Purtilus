import { TestBed } from '@angular/core/testing';

import { NewRepositoryResolver } from './new-repository.resolver';

describe('NewRepositoryResolver', () => {
  let resolver: NewRepositoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewRepositoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
