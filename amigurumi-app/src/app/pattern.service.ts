import { Injectable, inject } from '@angular/core';
import { Pattern } from './pattern';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
    url = 'http://localhost:3000/patterns';
    http = inject(HttpClient)
 
  constructor() { }

  getAllPatterns(): Observable<Pattern[]> {
   return this.http.get<Pattern[]>(this.url)
  }

  getPatternById(id:string): Observable<Pattern>{
    return this.http.get<Pattern>(this.url+ '/'+ id)
  }

  editPatternById(id:string, pattern: Pattern) :Observable<Pattern>{
    return this.http.put<Pattern>(this.url+ '/'+ id, pattern);
  }

  createPattern(pattern: Pattern): Observable<Pattern[]>{
    return this.http.post<Pattern[]>(this.url, pattern);
  }

  idUnique(): string{
    return Math.floor(Math.random() * 100).toString()
  }



   /* async editPattern(title:string, description:string, id:string) {
    const data = await fetch(this.url+ '/'+ id, {
        method: "PUT", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, description, id:''}),
      });
    return await data.json() ?? {};
  }*/


  /*async createPattern(title:string, description:string){
    const data = await fetch(this.url, {
        method: "POST", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, description, id:''}),
      });
  
      const result = await data.json();
      console.log("succeed :", result);    
  }*/



  /*async deletePattern(id:string) {
    await fetch(this.url+ '/'+ id, {
        method: "DELETE", // ou 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("delete succeed");    

  }*/
}
