import { TestBed } from '@angular/core/testing';

import { NewRepositoryService } from './new-repository.service';

describe('NewRepositoryService', () => {
  let service: NewRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
