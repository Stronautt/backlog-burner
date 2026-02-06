import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { HowStepComponent } from './how-step';
import { HowStep } from './home.models';
import { getTranslocoTestingModule } from '../core/transloco-testing';

@Component({
  template: `<app-how-step [step]="step()" [showConnector]="showConnector()" />`,
  imports: [HowStepComponent],
})
class TestHost {
  step = signal<HowStep>({
    num: '01',
    key: 'propose',
    label: 'Propose',
    description: 'Test description',
  });
  showConnector = signal(true);
}

describe('HowStepComponent', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost, getTranslocoTestingModule()],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render step number', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.how-num')?.textContent).toBe('01');
  });

  it('should render translated label', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.how-label')?.textContent?.trim()).toBe('Propose');
  });

  it('should render translated description', () => {
    const el = fixture.nativeElement as HTMLElement;
    const desc = el.querySelector('.how-desc')?.textContent?.trim();
    expect(desc).toContain('feature request');
  });

  it('should show connector when showConnector is true', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.how-connector')).toBeTruthy();
  });

  it('should hide connector when showConnector is false', () => {
    fixture.componentInstance.showConnector.set(false);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.how-connector')).toBeFalsy();
  });
});
