import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models';
import { CartService } from '../../services';
import { products } from '../../models/products.const';

@Component({
  selector: 'lib-product-details',
  templateUrl: './product-details-signal.component.html',
  styleUrls: ['../product-details/product-details.component.scss'],
  standalone: false,
})
export class ProductDetailsSignalComponent implements OnInit {

  product: WritableSignal<Product | undefined> = signal(undefined);

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product.set(products.find(product => product.id === productIdFromRoute));
  }

  addToCart(product: Product | undefined) {
    if (!product) {
      return;
    }

    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
