import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PatternService } from '../pattern.service';
import { Pattern } from '../pattern';
import { CardComponent } from '../card/card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
    title = 'amigurumi-app';
    patterns: Pattern[]=[];
    patternsService = inject(PatternService);
    sub!: Subscription
    constructor() {}


    ngOnInit() {
     this.sub =this.patternsService.getAllPatterns().subscribe((patterns:Pattern[])=>{
      this.patterns = patterns
     })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
