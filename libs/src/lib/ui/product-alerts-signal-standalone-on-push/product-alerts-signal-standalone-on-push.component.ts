import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ProductAlertsSignalComponent } from '../product-alerts-signal/product-alerts-signal.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: '../product-alerts-signal/product-alerts-signal.component.html',
  styleUrls: ['../product-alerts/product-alerts.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAlertsSignalStandaloneOnPushComponent extends ProductAlertsSignalComponent {}
