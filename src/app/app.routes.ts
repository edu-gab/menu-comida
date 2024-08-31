import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'dish-details',
    loadComponent: () => import('./dish-details/dish-details.page').then( m => m.DishDetailsPage)
  },
];
