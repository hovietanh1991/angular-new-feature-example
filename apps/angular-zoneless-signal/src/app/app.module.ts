import {NgModule, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  CartSignalComponent, CartSignalModule,
  ProductAlertsSignalModule,
  ProductDetailsSignalComponent, ProductDetailsSignalModule,
  ProductListSignalComponent, ProductListSignalModule,
  ShippingSignalComponent, ShippingSignalModule,
  TopBarModule
} from '@libs';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListSignalComponent },
      { path: 'products/:productId', component: ProductDetailsSignalComponent },
      { path: 'cart', component: CartSignalComponent },
      { path: 'shipping', component: ShippingSignalComponent },
    ]),
    CartSignalModule,
    ProductAlertsSignalModule,
    ProductDetailsSignalModule,
    ProductListSignalModule,
    ShippingSignalModule,
    TopBarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
