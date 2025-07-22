import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import { ProductDetailsSignalComponent } from '../product-details-signal/product-details-signal.component';

@Component({
  selector: 'lib-product-details',
  templateUrl: '../product-details-signal/product-details-signal.component.html',
  styleUrls: ['../product-details/product-details.component.scss'],
  imports: [
    CurrencyPipe
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsSignalStandaloneOnPushComponent extends ProductDetailsSignalComponent {}
