import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { allPatternsGuard } from './all-patterns.guard';

describe('allPatternsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allPatternsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
