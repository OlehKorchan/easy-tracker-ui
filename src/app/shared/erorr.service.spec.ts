import { TestBed } from '@angular/core/testing';

import { ErorrService } from './erorr.service';

describe('ErorrService', () => {
  let service: ErorrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErorrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
