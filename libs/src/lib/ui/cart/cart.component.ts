import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { CartService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: false,
})
export class CartComponent {

  items: Product[];

  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required])
  });

  constructor(
    private cartService: CartService,
  ) {
    this.items = this.cartService.getItems();
  }

  showErrorAsText(errors: ValidationErrors | null | undefined): string {
    if (!errors) {
      return '';
    }

    return Object.keys(errors)?.join(', ');
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert(`Your order has been submitted: ${JSON.stringify(this.checkoutForm.value)}`);
    this.checkoutForm.reset();
  }
}
