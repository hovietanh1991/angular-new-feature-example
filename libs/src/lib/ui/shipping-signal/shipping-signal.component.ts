import {Component, Signal} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import { CartService } from '../../services';

@Component({
  selector: 'lib-shipping',
  templateUrl: './shipping-signal.component.html',
  styleUrls: ['../shipping/shipping.component.scss'],
  standalone: false,
})
export class ShippingSignalComponent {

  shippingCosts: Signal<{type: string, price: number}[] | undefined>;

  constructor(private cartService: CartService) {
    this.shippingCosts = toSignal(this.cartService.getShippingPrices());
  }

}
