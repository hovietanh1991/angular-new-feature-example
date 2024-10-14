import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductDetailsSignalComponent } from './product-details-signal.component';

@NgModule({
  declarations: [ProductDetailsSignalComponent],
  imports: [CommonModule, CurrencyPipe],
  exports: [ProductDetailsSignalComponent],
})
export class ProductDetailsSignalModule {}
