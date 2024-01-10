import { Component, inject } from '@angular/core';
import { PatternsService } from '../patterns.service';
import { Patterns } from '../patterns';
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
    patterns: Patterns[]=[]
    patternsService:PatternsService = inject(PatternsService)
  
    constructor() {
     this.patternsService.getAllPatterns().then((patterns:Patterns[])=>{
      this.patterns = patterns
     })
    }
}
