import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatternService } from '../pattern.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
 applyForm= new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
 })

 patternsService:PatternService = inject(PatternService)

 createPattern() {
    this.patternsService.createPattern(this.applyForm.value.title||'' , this.applyForm.value.description||'');
 }
}
