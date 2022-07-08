import { TestBed } from '@angular/core/testing';

import { AbstractApiServiceService } from './abstract-api-service.service';

describe('AbstractApiServiceService', () => {
  let service: AbstractApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
