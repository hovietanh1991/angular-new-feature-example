import {Component, } from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import { ProductDetailsSignalComponent } from '../product-details-signal/product-details-signal.component';

@Component({
  selector: 'app-product-details',
  templateUrl: '../product-details-signal/product-details-signal.component.html',
  styleUrls: ['../product-details/product-details.component.css'],
  imports: [
    CurrencyPipe
  ],
  standalone: true
})
export class ProductDetailsSignalStandaloneComponent extends ProductDetailsSignalComponent {}
