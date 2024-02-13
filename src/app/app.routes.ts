import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
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
  },
  {
    path: 'product',
    loadComponent: () => import('./product/product.component').then(p => p.ProductComponent)
  }
  ,
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent)
  }
];
