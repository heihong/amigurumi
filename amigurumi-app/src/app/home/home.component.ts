import { Component, inject } from '@angular/core';
import { PatternService } from '../pattern.service';
import { Pattern } from '../pattern';
import { CardComponent } from '../card/card.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/amigrurumi.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    private store = inject(Store);
    title = 'amigurumi-app';
    patterns: Pattern[]=[]
    count$?: Observable<number>
  
    constructor( private patternsService: PatternService) {
     this.patternsService.getAllPatterns().then((patterns:Pattern[])=>{
      this.patterns = patterns
     })
     this.count$ = this.store.select('counter');
    }

    increment() {
        this.store.dispatch(increment())
    }

    decrement() {
        this.store.dispatch(decrement())
    }

    reset() {
        this.store.dispatch(reset())
    }
}
