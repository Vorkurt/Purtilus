import { TestBed } from '@angular/core/testing';

import { TemplateRepositoryService } from './template-repository.service';

describe('TemplateRepositoryService', () => {
  let service: TemplateRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
