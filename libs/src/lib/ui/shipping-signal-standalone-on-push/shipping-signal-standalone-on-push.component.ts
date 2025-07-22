import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { ShippingSignalComponent } from '../shipping-signal/shipping-signal.component';

@Component({
  selector: 'lib-shipping',
  templateUrl: '../shipping-signal/shipping-signal.component.html',
  styleUrls: ['../shipping/shipping.component.scss'],
  imports: [
    CurrencyPipe
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingSignalStandaloneOnPushComponent extends ShippingSignalComponent {}
