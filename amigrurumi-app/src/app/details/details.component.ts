import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pattern } from '../pattern';
import { PatternService } from '../pattern.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    pattern: Pattern= {title:'', description:'', id:''}
    patternsService:PatternService = inject(PatternService)
    constructor() {
        this.patternsService.getPatternById(this.route.snapshot.params['id']).then((pattern:Pattern)=>{
            this.pattern =  {...pattern}
           })
    }
}
