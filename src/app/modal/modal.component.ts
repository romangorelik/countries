import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  alone:boolean = false;
  wife: boolean = false;
  family: boolean = false;
  friends: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setAlone(alone, wife, family, friends) {
    this.alone = alone;
    this.wife = wife;
    this.family = family;
    this.friends = friends;
  }

}
