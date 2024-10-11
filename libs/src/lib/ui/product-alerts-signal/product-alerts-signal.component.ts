import {Component, input, output} from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts-signal.component.html',
  styleUrls: ['../product-alerts/product-alerts.component.css']
})
export class ProductAlertsSignalComponent {
  // More about new input, output, model syntax
  // ref: https://blog.angular-university.io/angular-signal-components/

  product = input<Product | undefined>(undefined);
  notify = output<void>();
}
