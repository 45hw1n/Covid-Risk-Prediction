import { TestBed } from '@angular/core/testing';

import { NegativeService } from './negative.service';

describe('NegativeService', () => {
  let service: NegativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
