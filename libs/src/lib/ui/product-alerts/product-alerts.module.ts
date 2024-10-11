import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAlertsComponent } from './product-alerts.component';

@NgModule({
  declarations: [ProductAlertsComponent],
  imports: [CommonModule],
  exports: [ProductAlertsComponent],
})
export class ProductAlertsModule {}
