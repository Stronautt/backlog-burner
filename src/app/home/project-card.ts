import { Component, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ButtonDirective } from 'primeng/button';
import { Project } from './home.models';

@Component({
  selector: 'app-project-card',
  imports: [TranslocoPipe, Card, Tag, ButtonDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
