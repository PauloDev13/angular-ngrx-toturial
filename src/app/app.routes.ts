import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: ()=> import('./pages/home/home.component')
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent)
  }
];
