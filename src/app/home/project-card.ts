import { Component, input } from '@angular/core';
import { Project } from './home.models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
