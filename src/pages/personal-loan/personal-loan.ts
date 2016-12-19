import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PersonalLoan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal-loan',
  templateUrl: 'personal-loan.html'
})
export class PersonalLoan {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PersonalLoan Page');
  }

}
