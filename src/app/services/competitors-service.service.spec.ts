import { TestBed } from '@angular/core/testing';

import { CompetitorsServiceService } from './competitors-service.service';

describe('CompetitorsServiceService', () => {
  let service: CompetitorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
