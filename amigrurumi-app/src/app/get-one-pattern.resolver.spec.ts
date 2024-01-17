import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getOnePatternResolver } from './get-one-pattern.resolver';

describe('getOnePatternResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getOnePatternResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
