import { Component, OnInit } from '@angular/core';

import { images } from './helpers/backgroundImages.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  image: string = images[0];
  showModal: boolean = false;

  constructor () {
    this.image = images[Math.floor(Math.random() * images.length)]
  }

  ngOnInit () {
    
  }

  popUpModal = () => {
    setTimeout((() => {
      this.showModal = true;
    }), 2000)
  }
  
}
