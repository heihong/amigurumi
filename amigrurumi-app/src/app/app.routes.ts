import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { getAllPatternsResolver } from './get-all-patterns.resolver';
import { getOnePatternResolver } from './get-one-pattern.resolver';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Accueil',
        resolve: {
            patterns: getAllPatternsResolver,
          },
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Afficher le detail',
        resolve: {
            pattern: getOnePatternResolver,
          },
      },
      {
        path: 'add',
        component: AddComponent,
        title: 'Ajouter un pattern',
      },
];
