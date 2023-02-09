import { TestBed } from '@angular/core/testing';

import { RouterExitService } from './router-exit.service';

describe('RouterExitService', () => {
  let service: RouterExitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterExitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
