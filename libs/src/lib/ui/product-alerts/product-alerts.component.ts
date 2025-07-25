import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'lib-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
  standalone: false,
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
