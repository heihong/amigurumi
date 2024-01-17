import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PatternService } from './pattern.service';

export const getAllPatternsResolver: ResolveFn<boolean> = (route, state, patternService = inject(PatternService)) => {
  return patternService.getAllPatterns();
};
