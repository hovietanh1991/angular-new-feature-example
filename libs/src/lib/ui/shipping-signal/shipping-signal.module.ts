import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ShippingSignalComponent } from './shipping-signal.component';

@NgModule({
  declarations: [ShippingSignalComponent],
  imports: [CommonModule, CurrencyPipe],
  exports: [ShippingSignalComponent],
})
export class ShippingSignalModule {}
