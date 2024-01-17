import { CanActivateFn } from '@angular/router';
import { PatternService } from './pattern.service';
import { inject } from '@angular/core';
import { from, map, switchMap, tap } from 'rxjs';

export const allPatternsGuard: CanActivateFn = (route, state) => {
    const patternService = inject(PatternService)
   
   return  patternService.getAllPatterns()
};
