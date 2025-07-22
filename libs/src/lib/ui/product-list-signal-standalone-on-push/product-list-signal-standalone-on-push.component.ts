import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {
  ProductAlertsSignalStandaloneComponent
} from '../product-alerts-signal-standalone/product-alerts-signal-standalone.component';
import { ProductListSignalComponent } from '../product-list-signal/product-list-signal.component';

@Component({
  selector: 'lib-product-list',
  templateUrl: '../product-list-signal/product-list-signal.component.html',
  styleUrls: ['../product-list/product-list.component.scss'],
  imports: [
    ProductAlertsSignalStandaloneComponent,
    RouterLink
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListSignalStandaloneOnPushComponent extends ProductListSignalComponent {}
