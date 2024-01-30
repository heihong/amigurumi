import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pattern } from '../pattern';
import { PatternService } from '../pattern.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
   
    route: ActivatedRoute = inject(ActivatedRoute);

    edit= false;
    title:string = '';
    description:string=''

    applyForm= new FormGroup({
        title: new FormControl(this.title),
        description: new FormControl(this.description),
     })
    

    constructor(private router: Router, private patternsService: PatternService) {
        this.patternsService.getPatternById(this.route.snapshot.params['id']).then((pattern:Pattern)=>{
            this.title = pattern.title;
            this.description = pattern.description
        })
    }

    editPattern() {
        this.patternsService.editPattern(this.applyForm.value.title||'' , this.applyForm.value.description||'', this.route.snapshot.params['id']).then((pattern:Pattern)=>{
            this.edit=false;
            console.log(pattern)
            this.title = pattern.title;
            this.description = pattern.description
        });
    
    }

    deletePattern() {
        this.patternsService.deletePattern(this.route.snapshot.params['id']).then(()=>{
            this.router.navigate(['/']);
        });
    }

}
