import { Injectable } from '@angular/core';
import { Patterns } from './patterns';

@Injectable({
  providedIn: 'root'
})
export class PatternsService {
    url = 'http://localhost:3000/api/patterns';
 
  constructor() { }

  async getAllPatterns(): Promise<Patterns[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

 /* getPatternById(id: string): Patterns | undefined {
    return this.patterns.find((pattern) => pattern.id === id);
  }*/
}
