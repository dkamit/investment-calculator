import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CarLoan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-car-loan',
  templateUrl: 'car-loan.html'
})
export class CarLoan {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CarLoan Page');
  }

}
