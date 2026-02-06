import { Component, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Card } from 'primeng/card';
import { HowStep } from './home.models';

@Component({
  selector: 'app-how-step',
  imports: [TranslocoPipe, Card],
  templateUrl: './how-step.html',
  styleUrl: './how-step.css',
})
export class HowStepComponent {
  readonly step = input.required<HowStep>();
  readonly showConnector = input(true);
}
