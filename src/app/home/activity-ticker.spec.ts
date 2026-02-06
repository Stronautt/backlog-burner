import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivityTickerComponent } from './activity-ticker';
import { ActivityItem } from './home.models';

@Component({
  template: `<app-activity-ticker [items]="items" />`,
  imports: [ActivityTickerComponent],
})
class TestHost {
  items: ActivityItem[] = [
    { time: '2m ago', type: 'boost', project: 'TestProject', description: 'boosted by 100' },
    { time: '5m ago', type: 'new', project: 'OtherProject', description: 'new feature added' },
  ];
}

describe('ActivityTickerComponent', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render all activity items', () => {
    const rows = fixture.nativeElement.querySelectorAll('.ticker-row');
    expect(rows.length).toBe(2);
  });

  it('should display project name', () => {
    const project = fixture.nativeElement.querySelector('.ticker-project');
    expect(project?.textContent).toBe('TestProject');
  });

  it('should apply correct type class', () => {
    const types = fixture.nativeElement.querySelectorAll('.ticker-type');
    expect(types[0].classList.contains('boost')).toBe(true);
    expect(types[1].classList.contains('new')).toBe(true);
  });
});
