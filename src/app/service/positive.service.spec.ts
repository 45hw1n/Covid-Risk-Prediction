import { TestBed } from '@angular/core/testing';

import { PositiveService } from './positive.service';

describe('PositiveService', () => {
  let service: PositiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
