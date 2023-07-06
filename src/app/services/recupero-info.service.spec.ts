import { TestBed } from '@angular/core/testing';

import { RecuperoInfoService } from './recupero-info.service';

describe('RecuperoInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperoInfoService = TestBed.get(RecuperoInfoService);
    expect(service).toBeTruthy();
  });
});
