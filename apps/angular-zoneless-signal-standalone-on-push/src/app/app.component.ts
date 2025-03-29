import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TopBarStandaloneOnPushComponent
} from '../../../../libs/src/lib/ui/top-bar-standalone-on-push/top-bar-standalone-on-push.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, TopBarStandaloneOnPushComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
