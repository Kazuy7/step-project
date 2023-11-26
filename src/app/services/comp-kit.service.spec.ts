import { TestBed } from '@angular/core/testing';

import { CompKitService } from './comp-kit.service';

describe('CompKitService', () => {
  let service: CompKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
