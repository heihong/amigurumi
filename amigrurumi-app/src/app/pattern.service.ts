import { Injectable } from '@angular/core';
import { Pattern } from './pattern';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
    url = 'http://localhost:3000/api/pattern';
    patterns :Pattern[] = [];
 
  constructor() { }

  async getAllPatterns(): Promise<any> {
    const data = await fetch(this.url);
    this.patterns = await data.json() ?? [];
    if(this.patterns){
        return of(true)
    }else{
        return of(false)
    }
  }


  async getPatternById(id:string): Promise<Pattern>{
    const data = await fetch(this.url+ '/'+ id )
    return await data.json() ?? {};
  }

  async createPattern(title:string, description:string){
    const data = await fetch(this.url, {
        method: "POST", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, description, id:''}),
      });
  
      const result = await data.json();
      console.log("succeed :", result);    
  }

  async editPattern(title:string, description:string, id:string) {
    const data = await fetch(this.url+ '/'+ id, {
        method: "PUT", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, description, id:''}),
      });
    return await data.json() ?? {};
  }

  async deletePattern(id:string) {
    await fetch(this.url+ '/'+ id, {
        method: "DELETE", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("delete succeed");    

  }
}
