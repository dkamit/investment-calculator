import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomAppValidator } from '../../validators/CustomAppValidator';

/*
  Generated class for the MutualFunds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mutual-funds',
  templateUrl: 'mutual-funds.html'
})
export class MutualFunds {

  private myForm: FormGroup;
  private isSubmitted: boolean = false;
  private isCalculated: boolean = false;
  private absoluteReturn : number;
  private simpleAnnualisedReturn : number;
  private compoundedAnnualGrowthRate : number;
  private currentValue : number;

  public doughnutChartLabels:string[] = ['Principle'];
  public doughnutChartData:number[] = [0];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartOptions:any = {
    animation: false,
    responsive: true
  };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'lumpsum_amount': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'initial_nav': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'current_nav': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])],
      'term': ['', Validators.compose([Validators.required,CustomAppValidator.isPositiveNumber])]
    });
  }

  onSubmit(myForm: FormGroup) {
    this.isSubmitted = true;
    let lumpsumAmount: number = parseFloat(myForm.controls['lumpsum_amount'].value);
    let initialNav: number = parseFloat(myForm.controls['initial_nav'].value);
    let currentNav: number = parseFloat(myForm.controls['current_nav'].value);
    let term: number = parseFloat(myForm.controls['term'].value);

    this.absoluteReturn = +(((currentNav - initialNav)/initialNav)*100).toFixed(2);
    this.simpleAnnualisedReturn = +(Math.pow((1 + this.absoluteReturn/100), (12/term)) - 1).toFixed(4) * 100;
    this.compoundedAnnualGrowthRate = +((Math.pow(currentNav/initialNav, (12/term))-1)*100).toFixed(2);
    this.currentValue = +(lumpsumAmount/initialNav*currentNav).toFixed(2);


  }

}
