import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component'
import { HeaderComponent } from './header/header.component';
import { Patterns } from './patterns';
import { PatternsService } from './patterns.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amigrurumi-app';
  patterns: Patterns[]=[]
  patternsService:PatternsService = inject(PatternsService)

  constructor() {
   this.patternsService.getAllPatterns().then((patterns:Patterns[])=>{
    this.patterns = patterns
   })
  }

}
