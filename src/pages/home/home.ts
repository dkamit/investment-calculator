import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FixedDeposit } from '../fixed-deposit/fixed-deposit'
import { HomeLoan } from '../home-loan/home-loan'
import { MutualFunds } from '../mutual-funds/mutual-funds'
import { PersonalLoan } from '../personal-loan/personal-loan'
import { RecurringDeposit } from '../recurring-deposit/recurring-deposit'
import { CarLoan } from '../car-loan/car-loan'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  fixedDeposits() {
    console.log("Clicked Fixed Deposits");
    this.navCtrl.push(FixedDeposit);
  }

  recurringDeposits() {
    console.log("Clicked Recurring Deposits");
    this.navCtrl.push(RecurringDeposit);
  }

  mutualFunds() {
    console.log("Clicked Mutual Funds");
    this.navCtrl.push(MutualFunds);
  }

  stocks() {
    console.log("Clicked stocks");
    this.navCtrl.push(MutualFunds);
  }

  personalLoan() {
    console.log("Clicked Personal Loan");
    this.navCtrl.push(PersonalLoan);
  }

  housingLoan() {
    console.log("Clicked Housing loan");
    this.navCtrl.push(HomeLoan);
  }

  carLoan() {
    console.log("Clicked carLoan");
    this.navCtrl.push(CarLoan);
  }
}
