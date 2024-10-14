import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsModule } from '../product-alerts/product-alerts.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, RouterModule, ProductAlertsModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
