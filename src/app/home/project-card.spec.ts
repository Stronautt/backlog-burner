import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { ProjectCardComponent } from './project-card';
import { Project } from './home.models';
import { getTranslocoTestingModule } from '../core/transloco-testing';

@Component({
  template: `<app-project-card [project]="project()" />`,
  imports: [ProjectCardComponent],
})
class TestHost {
  project = signal<Project>({
    avatar: 'BB',
    name: 'TestProject',
    author: '@test',
    rank: 1,
    description: 'A test project',
    tokens: '10k',
    features: 5,
    shipped: 2,
    tags: ['angular', 'test'],
  });
}

describe('ProjectCardComponent', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost, getTranslocoTestingModule()],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render project name', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.card-name')?.textContent).toBe('TestProject');
  });

  it('should render rank', () => {
    const el = fixture.nativeElement as HTMLElement;
    const rankTag = el.querySelector('p-tag');
    expect(rankTag).toBeTruthy();
  });

  it('should render tags', () => {
    const tags = fixture.nativeElement.querySelectorAll('.card-tags p-tag');
    expect(tags.length).toBe(2);
  });

  it('should not render backlog when not featured', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.backlog-preview')).toBeFalsy();
  });

  it('should render backlog when featured with backlog data', () => {
    fixture.componentInstance.project.set({
      ...fixture.componentInstance.project(),
      featured: true,
      backlog: [{ feature: 'OAuth', votes: 100, priority: 'high' }],
    });
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.backlog-preview')).toBeTruthy();
    expect(el.querySelector('.backlog-feature')?.textContent).toBe('OAuth');
  });
});
