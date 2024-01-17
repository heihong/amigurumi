import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getAllPatternsResolver } from './get-all-patterns.resolver';

describe('getAllPatternsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getAllPatternsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
