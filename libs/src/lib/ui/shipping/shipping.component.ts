import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../../services';

@Component({
  selector: 'lib-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
  standalone: false,
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
