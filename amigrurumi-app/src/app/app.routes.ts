import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { allPatternsGuard } from './all-patterns.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Accueil',
        canActivate: [allPatternsGuard]
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Afficher le detail',
      },
      {
        path: 'add',
        component: AddComponent,
        title: 'Ajouter un pattern',
      },
];
