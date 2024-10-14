import {NgModule, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  CartComponent,
  CartModule,
  ProductAlertsModule, ProductDetailsComponent,
  ProductDetailsModule, ProductListComponent,
  ProductListModule, ShippingComponent,
  ShippingModule,
  TopBarModule
} from '@libs';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    CartModule,
    ProductAlertsModule,
    ProductDetailsModule,
    ProductListModule,
    ShippingModule,
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
