import {Component} from '@angular/core';
import { ProductAlertsSignalComponent } from '../product-alerts-signal/product-alerts-signal.component';

@Component({
  selector: 'lib-product-alerts',
  templateUrl: '../product-alerts-signal/product-alerts-signal.component.html',
  styleUrls: ['../product-alerts/product-alerts.component.scss'],
  standalone: true
})
export class ProductAlertsSignalStandaloneComponent extends ProductAlertsSignalComponent {}
