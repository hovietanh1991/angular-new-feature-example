import {Component, signal} from '@angular/core';
import { products } from '../../models/products.const';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list-signal.component.html',
  styleUrls: ['../product-list/product-list.component.scss'],
  standalone: false,
})
export class ProductListSignalComponent {

  products = signal([...products]);

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
