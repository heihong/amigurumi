import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PatternService } from './pattern.service';

export const getOnePatternResolver: ResolveFn<boolean> = (route, state, patternService = inject(PatternService)):any => {
    return patternService.getPatternById(route.paramMap.get('id') as string);
  };
  