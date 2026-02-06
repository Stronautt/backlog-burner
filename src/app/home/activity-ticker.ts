import { Component, input } from '@angular/core';
import { ActivityItem } from './home.models';

@Component({
  selector: 'app-activity-ticker',
  templateUrl: './activity-ticker.html',
  styleUrl: './activity-ticker.css',
})
export class ActivityTickerComponent {
  items = input.required<ActivityItem[]>();
}
