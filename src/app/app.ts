import { Component } from '@angular/core';
import { ProjectCardComponent } from './home/project-card';
import { HowStepComponent } from './home/how-step';
import { ActivityTickerComponent } from './home/activity-ticker';
import { ACTIVITY_ITEMS, HOW_STEPS, PIPELINE_STEPS, PROJECTS } from './home/home.data';

@Component({
  selector: 'app-root',
  imports: [ProjectCardComponent, HowStepComponent, ActivityTickerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly projects = PROJECTS;
  protected readonly howSteps = HOW_STEPS;
  protected readonly activityItems = ACTIVITY_ITEMS;
  protected readonly pipelineSteps = PIPELINE_STEPS;
}
