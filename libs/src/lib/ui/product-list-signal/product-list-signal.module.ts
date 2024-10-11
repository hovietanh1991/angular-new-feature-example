import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductListSignalComponent } from './product-list-signal.component';
import { RouterLink } from '@angular/router';
import { ProductAlertsSignalModule } from '@libs';

@NgModule({
  declarations: [ProductListSignalComponent],
  imports: [CommonModule, RouterLink, ProductAlertsSignalModule],
  exports: [ProductListSignalComponent],
})
export class ProductListSignalModule {}
