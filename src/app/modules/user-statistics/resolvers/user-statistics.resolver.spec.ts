import { TestBed } from '@angular/core/testing';

import { UserStatisticsResolver } from './user-statistics.resolver';

describe('UserStatisticsResolver', () => {
  let resolver: UserStatisticsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserStatisticsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
