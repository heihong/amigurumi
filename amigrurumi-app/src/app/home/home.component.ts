import { Component, inject } from '@angular/core';
import { PatternService } from '../pattern.service';
import { Pattern } from '../pattern';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    title = 'amigrurumi-app';
    patterns: Pattern[]=[]
  
    constructor( private patternsService: PatternService) {
     this.patternsService.getAllPatterns().then((patterns:Pattern[])=>{
      this.patterns = patterns
     })
    }
}
