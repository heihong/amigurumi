import { Component, Input, inject } from '@angular/core';
import { PatternService } from '../pattern.service';
import { Pattern } from '../pattern';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    @Input() patterns: Pattern[] = [];
   
}
