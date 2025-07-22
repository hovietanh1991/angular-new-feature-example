import {Component, input, output} from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'lib-product-alerts',
  templateUrl: './product-alerts-signal.component.html',
  styleUrls: ['../product-alerts/product-alerts.component.scss'],
  standalone: false,
})
export class ProductAlertsSignalComponent {
  // More about new input, output, model syntax
  // ref: https://blog.angular-university.io/angular-signal-components/

  product = input<Product | undefined>(undefined);
  notify = output<void>();
}
