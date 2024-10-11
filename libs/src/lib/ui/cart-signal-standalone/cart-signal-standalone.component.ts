import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import { CartSignalComponent } from '../cart-signal/cart-signal.component';

@Component({
  selector: 'app-cart',
  templateUrl: '../cart-signal/cart-signal.component.html',
  styleUrls: ['../cart/cart.component.css'],
  imports: [
    FormsModule,
    CurrencyPipe,
    RouterLink
  ],
  standalone: true
})
export class CartSignalStandaloneComponent extends CartSignalComponent {
}
