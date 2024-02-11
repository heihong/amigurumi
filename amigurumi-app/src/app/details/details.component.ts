import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
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
export class DetailsComponent implements OnInit {
   
    route: ActivatedRoute = inject(ActivatedRoute);
    patternsService = inject(PatternService)

    edit= false;

    applyForm!:FormGroup;
    title = '';
    id = this.route.snapshot.params['id'];


    constructor(private router: Router) {
        
    }

    ngOnInit(): void {
        this.patternsService.getPatternById(this.id).subscribe((pattern:Pattern)=>{
           this.title = pattern.title
           this.initForm(pattern)

        })
    }

    private initForm(pattern:Pattern){
        this.applyForm = new FormGroup({
            'title': new FormControl(pattern.title),
        })
    }

    onSubmit(){
        this.patternsService.editPatternById(this.id, {id:this.id, ...this.applyForm.value}).subscribe((pattern:Pattern)=>{
           this.title = pattern.title
            this.edit = false
        })
       
    }


}
