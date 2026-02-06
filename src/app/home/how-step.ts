import { Component, input } from '@angular/core';
import { HowStep } from './home.models';

@Component({
  selector: 'app-how-step',
  templateUrl: './how-step.html',
  styleUrl: './how-step.css',
})
export class HowStepComponent {
  step = input.required<HowStep>();
  showConnector = input(true);
}
