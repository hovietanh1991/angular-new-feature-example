import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideZonelessChangeDetection(),
      provideBrowserGlobalErrorListeners(),
      provideHttpClient(),
      provideRouter(
        [
          {path: '', loadComponent: () => import('../../../libs/src/lib/ui/product-list-signal-standalone/product-list-signal-standalone.component').then(m => m.ProductListSignalStandaloneComponent)},
          {path: 'products/:productId', loadComponent: () => import('../../../libs/src/lib/ui/product-details-signal-standalone/product-details-signal-standalone.component').then(m => m.ProductDetailsSignalStandaloneComponent)},
          {path: 'cart', loadComponent: () => import('../../../libs/src/lib/ui/cart-signal-standalone/cart-signal-standalone.component').then(m => m.CartSignalStandaloneComponent)},
          {path: 'shipping', loadComponent: () => import('../../../libs/src/lib/ui/shipping-signal-standalone/shipping-signal-standalone.component').then(m => m.ShippingSignalStandaloneComponent)},
        ]
      )
    ],
  }
).catch(err => console.error(err));
