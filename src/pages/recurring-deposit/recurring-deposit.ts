import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomAppValidator } from '../../validators/CustomAppValidator';

/*
  Generated class for the RecurringDeposit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recurring-deposit',
  templateUrl: 'recurring-deposit.html'
})
export class RecurringDeposit {
  private myForm: FormGroup;
  private isSubmitted: boolean = false;
  private isCalculated: boolean = false;
  private maturity_amount : number;
  private interest_earned : number;

  public doughnutChartLabels:string[] = ['Total Installment Amount'];
  public doughnutChartData:number[] = [0];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartOptions:any = {
    animation: false,
    responsive: true
  };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'monthly_installment': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'interest_rate': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'quarters': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])]
    });
  }

  onSubmit(myForm: FormGroup) {
    this.isSubmitted = true;
    if(myForm.valid) {
      let monthly_installment: number = parseFloat(myForm.controls['monthly_installment'].value);
      let interest_rate: number = parseFloat(myForm.controls['interest_rate'].value);
      let quarters: number = parseInt(myForm.controls['quarters'].value);

      //(R*(Math.pow(1+i,n)-1))/(1-Math.pow((1+i),-1/3))
      this.maturity_amount = +((monthly_installment * (Math.pow(1+interest_rate/400, quarters)-1))
                                  /(1-Math.pow((1+interest_rate/400),-1/3))).toFixed(2);
      let deposit_amount = monthly_installment * quarters * 3;
      this.interest_earned = +(this.maturity_amount - deposit_amount).toFixed(2);
      this.doughnutChartLabels = ['Total Installment Amount', 'Interest Earned'];
      this.doughnutChartData = [deposit_amount, this.interest_earned]; 
      this.isCalculated = true;
    }
  }
}
