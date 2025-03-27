import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  ProductAlertsSignalStandaloneComponent
} from '../product-alerts-signal-standalone/product-alerts-signal-standalone.component';
import { products } from '../../models/products.const';
import { ProductListSignalComponent } from '../product-list-signal/product-list-signal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: '../product-list-signal/product-list-signal.component.html',
  styleUrls: ['../product-list/product-list.component.css'],
  imports: [
    ProductAlertsSignalStandaloneComponent,
    RouterLink
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListSignalStandaloneOnPushComponent extends ProductListSignalComponent {}
