import { NgModule , ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FixedDeposit } from '../pages/fixed-deposit/fixed-deposit';
import { HomeLoan } from '../pages/home-loan/home-loan'
import { MutualFunds } from '../pages/mutual-funds/mutual-funds'
import { PersonalLoan } from '../pages/personal-loan/personal-loan'
import { RecurringDeposit } from '../pages/recurring-deposit/recurring-deposit'
import { CarLoan } from '../pages/car-loan/car-loan'
import { ChartsModule } from 'ng2-charts/ng2-charts'
import { MyErrorHandler } from '../error-handlers/chart-error-handler'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FixedDeposit,
    CarLoan,
    RecurringDeposit,
    PersonalLoan,
    MutualFunds,
    HomeLoan
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FixedDeposit,
    CarLoan,
    RecurringDeposit,
    PersonalLoan,
    MutualFunds,
    HomeLoan
  ],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
})
export class AppModule {}
