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
  partyText:string = '';
  buttonStates:any[] = [false, false, false];

  constructor() { }

  ngOnInit() {
  }

  setAmountOfTime(one, two, three) {
    this.buttonStates[0] = one;
    this.buttonStates[1] = two;
    this.buttonStates[2] = three;
  }

  setParty(alone, wife, family, friends) {
    if (alone) {
      this.partyText = 'You are going alone!'
    } else if (wife) {
      this.partyText = 'You are going on a romantic getaway!'
    } else if (family) {
      this.partyText = 'You are going on a family vacation!'
    } else {
      this.partyText = 'You are going away with friends!'
    }

    this.alone = alone;
    this.wife = wife;
    this.family = family;
    this.friends = friends;
  }

}
