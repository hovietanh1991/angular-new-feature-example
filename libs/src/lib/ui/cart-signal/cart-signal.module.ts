import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartSignalComponent } from './cart-signal.component';

@NgModule({
  declarations: [CartSignalComponent],
  imports: [CommonModule, FormsModule, CurrencyPipe, RouterLink],
  exports: [CartSignalComponent],
})
export class CartSignalModule {}
