import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailValidatorComponent } from './email-validator/email-validator.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorComponent,
    PricingPlanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
