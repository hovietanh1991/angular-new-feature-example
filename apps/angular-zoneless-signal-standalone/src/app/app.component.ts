import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarStandaloneComponent } from '../../../../libs/src/lib/ui/top-bar-standalone/top-bar-standalone.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, TopBarStandaloneComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
