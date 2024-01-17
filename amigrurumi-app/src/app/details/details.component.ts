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

    isEdit= false;

    pattern = this.route.snapshot.data['pattern'];
    title:string =this.pattern.title;
    description:string=this.pattern.description

    applyForm= new FormGroup({
        title: new FormControl(this.title),
        description: new FormControl(this.description),
     })
    

    constructor(private router: Router, private patternsService: PatternService) {
    
    }

    editPattern() {
        this.patternsService.editPattern(this.applyForm.value.title||'' , this.applyForm.value.description||'', this.route.snapshot.params['id']).then((pattern:Pattern)=>{
            this.isEdit=false;
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
