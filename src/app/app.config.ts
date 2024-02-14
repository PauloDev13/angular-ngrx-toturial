import {ApplicationConfig} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideState, provideStore} from '@ngrx/store';
import {counterReducer} from "./state/counter/counter.reducer";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {cartReducer} from "./state/cart/cart.reducer";
import {productReducer} from "./state/product/product.reducer";
import {provideEffects} from "@ngrx/effects";
import {ProductEffects} from "./state/product/product.effects";
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideStore(),
    provideState('counter', counterReducer),
    provideState('cart', cartReducer),
    provideState('product', productReducer),
    provideEffects(ProductEffects),
  ]
};
