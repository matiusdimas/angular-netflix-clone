import { TestBed } from '@angular/core/testing';

import { DatamovieService } from './datamovie.service';

describe('DatamovieService', () => {
  let service: DatamovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
