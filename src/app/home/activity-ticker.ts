import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ActivityItem } from './home.models';

@Component({
  selector: 'app-activity-ticker',
  imports: [Card, Tag],
  templateUrl: './activity-ticker.html',
  styleUrl: './activity-ticker.css',
})
export class ActivityTickerComponent {
  readonly items = input.required<ActivityItem[]>();

  protected typeSeverity(type: string): 'warn' | 'success' | 'info' {
    switch (type) {
      case 'boost':
        return 'warn';
      case 'new':
        return 'success';
      case 'shipped':
        return 'info';
      default:
        return 'info';
    }
  }
}
