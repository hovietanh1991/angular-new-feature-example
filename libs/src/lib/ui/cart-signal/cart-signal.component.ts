import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart-signal.component.html',
  styleUrls: ['../cart/cart.component.scss'],
  standalone: false,
})
export class CartSignalComponent {

  items: WritableSignal<Product[]>;

  checkoutName = signal('');
  checkoutAddress = signal('');

  checkoutNameValidationError: Signal<string | null> = computed(() => {
    const value = this.checkoutName();
    if (!value) {
      return 'required';
    }

    if (value.length > 10) {
      return 'maxLength';
    }

    return null;
  });

  checkoutAddressValidationError: Signal<string | null> = computed(() => {
    const value = this.checkoutAddress();
    if (!value) {
      return 'required';
    }

    return null;
  });

  constructor(
    private cartService: CartService
  ) {
    this.items = signal(this.cartService.getItems());
  }

  onSubmit(): void {
    // Process checkout data here
    this.items.set(this.cartService.clearCart());
    window.alert(`Your order has been submitted: ${JSON.stringify({name: this.checkoutName(), address: this.checkoutAddress()})}`);
    this.checkoutName.set('');
    this.checkoutAddress.set('');
  }
}
