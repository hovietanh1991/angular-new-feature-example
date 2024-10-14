import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { TopBarComponent } from '@libs';

@Component({
  selector: 'app-top-bar',
  templateUrl: '../top-bar/top-bar.component.html',
  styleUrls: ['../top-bar/top-bar.component.css'],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class TopBarStandaloneComponent extends TopBarComponent { }
