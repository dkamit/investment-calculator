import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomAppValidator } from '../../validators/CustomAppValidator';
/*
  Generated class for the FixedDeposit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fixed-deposit',
  templateUrl: 'fixed-deposit.html'
})
export class FixedDeposit {
  private myForm: FormGroup;
  private isSubmitted: boolean = false;
  private isCalculated: boolean = false;
  private maturity_amount : number;
  private interest_earned : number;

  public doughnutChartLabels:string[] = ['Principle'];
  public doughnutChartData:number[] = [0];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartOptions:any = {
    animation: false,
    responsive: true
  };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'deposit_amount': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'interest_rate': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'term': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'year_or_month': ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(myForm: FormGroup) {
    this.isSubmitted = true;
    if(myForm.valid) {
      let deposit_amount: number = parseFloat(myForm.controls['deposit_amount'].value);
      let interest_rate: number = parseFloat(myForm.controls['interest_rate'].value);
      let term: number = parseFloat(myForm.controls['term'].value);
      let year_or_month: string = (myForm.controls['year_or_month'].value);
      if(year_or_month == 'months') {
        term = term/12;
      }
      interest_rate = interest_rate/100;
      this.maturity_amount = +(deposit_amount * (Math.pow((1+interest_rate/4),4 * term))).toFixed(2);
      this.interest_earned = +(this.maturity_amount - deposit_amount).toFixed(2);
      this.doughnutChartLabels = ['Principle', 'Interest Earned'];
      this.doughnutChartData = [deposit_amount, this.interest_earned];
      this.isCalculated = true;
    }
  }
}
