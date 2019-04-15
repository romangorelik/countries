import { Component } from '@angular/core';

import { images } from './helpers/backgroundImages.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: string = images[0];

  constructor () {
    this.image = images[Math.floor(Math.random() * images.length)]
  }
}
