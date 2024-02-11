import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatternService } from '../pattern.service';
import { Router, RouterLink } from '@angular/router';
import { Pattern } from '../pattern';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
    title = '';
    applyForm =  new FormGroup({
        'title': new FormControl(this.title),
    })
    patternsService = inject(PatternService)
    constructor(private router: Router){
    }
 

    createPattern() {
        let pattern : Pattern = {
            id : this.patternsService.idUnique(),
            title : this.applyForm.value['title'] || ''
        }
        this.patternsService.createPattern(pattern).subscribe(()=>{
            this.router.navigate(['/']);
        });
    }
}
