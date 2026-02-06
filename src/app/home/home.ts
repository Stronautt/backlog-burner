import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { InputText } from 'primeng/inputtext';
import { SelectButton } from 'primeng/selectbutton';
import { ButtonDirective } from 'primeng/button';
import { Fluid } from 'primeng/fluid';
import { ProjectCardComponent } from './project-card';
import { HowStepComponent } from './how-step';
import { ActivityTickerComponent } from './activity-ticker';
import { ACTIVITY_ITEMS, HOW_STEPS, PIPELINE_STEPS, PROJECTS } from './home.data';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    TranslocoPipe,
    InputText,
    SelectButton,
    ButtonDirective,
    Fluid,
    ProjectCardComponent,
    HowStepComponent,
    ActivityTickerComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class HomeComponent {
  protected readonly projects = PROJECTS;
  protected readonly howSteps = HOW_STEPS;
  protected readonly activityItems = ACTIVITY_ITEMS;
  protected readonly pipelineSteps = PIPELINE_STEPS;

  protected readonly selectedFilter = signal('all');
  protected readonly filterOptions = [
    { label: 'search.all', value: 'all' },
    { label: 'search.trending', value: 'trending' },
    { label: 'search.new', value: 'new' },
    { label: 'search.mostFunded', value: 'mostFunded' },
  ];

  protected readonly selectedView = signal('cards');
  protected readonly viewOptions = [
    { label: 'projects.viewCards', value: 'cards' },
    { label: 'projects.viewList', value: 'list' },
    { label: 'projects.viewCompact', value: 'compact' },
  ];
}
