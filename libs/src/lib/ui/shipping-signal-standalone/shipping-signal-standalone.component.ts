import {Component, Signal} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {CurrencyPipe} from "@angular/common";
import { CartService } from '../../services';
import { ShippingSignalComponent } from '../shipping-signal/shipping-signal.component';

@Component({
  selector: 'app-shipping',
  templateUrl: '../shipping-signal/shipping-signal.component.html',
  styleUrls: ['../shipping/shipping.component.css'],
  imports: [
    CurrencyPipe
  ],
  standalone: true
})
export class ShippingSignalStandaloneComponent extends ShippingSignalComponent {}
