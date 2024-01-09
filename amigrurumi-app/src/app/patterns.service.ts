import { Injectable } from '@angular/core';
import { Patterns } from './patterns';

@Injectable({
  providedIn: 'root'
})
export class PatternsService {
   protected patterns: Patterns[]=[
        {
            id:'0',
            title: 'pikachu',
            description:'pikachu description'
        },
        {
            id:'1',
            title:'sailor',
            description:'sailor description'
        }]
  constructor() { }

  getAllPatterns(): Patterns[]{
    return this.patterns
  }

  getPatternById(id: string): Patterns | undefined {
    return this.patterns.find((pattern) => pattern.id === id);
  }
}
