import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  alone:boolean = false;
  wife:boolean = false;
  family:boolean = false;
  friends:boolean = false;
  partyText:string = '';
  buttonStates:any[] = [false, false, false];
  budgetStates:any[] = [false, false, false];
  seasonStates:any[] = [false, false, false, false];
  locationStates:any[] = [false, false, false, false];
  touristStates:any[] = [false, false];

  constructor() { }

  ngOnInit() {
  }

  setAmountOfTime(one, two, three) {
    this.buttonStates[0] = one;
    this.buttonStates[1] = two;
    this.buttonStates[2] = three;
  }

  setBudget(one,two,three) {
    this.budgetStates[0] = one;
    this.budgetStates[1] = two;
    this.budgetStates[2] = three;
  }

  setSeason(one,two,three, four) {
    this.seasonStates[0] = one;
    this.seasonStates[1] = two;
    this.seasonStates[2] = three;
    this.seasonStates[3] = four;
  }

  setLocation(one,two,three, four) {
    this.locationStates[0] = one;
    this.locationStates[1] = two;
    this.locationStates[2] = three;
    this.locationStates[3] = four;
  }

  setTourist(one, two) {
    this.touristStates[0] = one;
    this.touristStates[1] = two;
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
