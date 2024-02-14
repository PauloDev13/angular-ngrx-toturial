import {ApplicationConfig} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideStore} from '@ngrx/store';
import {provideHttpClient, withFetch} from "@angular/common/http";
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideStore(),
    // provideState('counter', counterReducer),
    // provideState('cart', cartReducer),
    // provideState('product', productReducer),
    // provideEffects(ProductEffects),
  ]
};
