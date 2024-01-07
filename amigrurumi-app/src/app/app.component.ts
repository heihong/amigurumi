import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component'
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amigrurumi-app';
  patterns=[
        {
            id:0,
            title: 'pikachu',
            description:'pikachu description'
        },
        {
            id:1,
            title:'sailor',
            description:'sailor description'
        }]
}
