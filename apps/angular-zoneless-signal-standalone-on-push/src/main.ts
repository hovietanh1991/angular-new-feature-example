import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideExperimentalZonelessChangeDetection(),
      provideHttpClient(),
      provideRouter(
        [
          {path: '', loadComponent: () => import('../../../libs/src/lib/ui/product-list-signal-standalone-on-push/product-list-signal-standalone-on-push.component').then(m => m.ProductListSignalStandaloneOnPushComponent)},
          {path: 'products/:productId', loadComponent: () => import('../../../libs/src/lib/ui/product-details-signal-standalone-on-push/product-details-signal-standalone-on-push.component').then(m => m.ProductDetailsSignalStandaloneOnPushComponent)},
          {path: 'cart', loadComponent: () => import('../../../libs/src/lib/ui/cart-signal-standalone-on-push/cart-signal-standalone-on-push.component').then(m => m.CartSignalStandaloneOnPushComponent)},
          {path: 'shipping', loadComponent: () => import('../../../libs/src/lib/ui/shipping-signal-standalone-on-push/shipping-signal-standalone-on-push.component').then(m => m.ShippingSignalStandaloneOnPushComponent)},
        ]
      )
    ],
  }
).catch(err => console.error(err));
