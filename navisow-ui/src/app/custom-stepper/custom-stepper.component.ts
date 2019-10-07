import { Component, OnInit } from '@angular/core';
import { CdkStepper, CdkStep } from '@angular/cdk/stepper';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.sass'],
  // This custom stepper provides itself as CdkStepper so that it can be recognized
  // by other components.
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper {
  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
