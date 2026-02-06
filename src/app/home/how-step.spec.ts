import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, signal } from '@angular/core';
import { HowStepComponent } from './how-step';
import { HowStep } from './home.models';

@Component({
  template: `<app-how-step [step]="step()" [showConnector]="showConnector()" />`,
  imports: [HowStepComponent],
})
class TestHost {
  step = signal<HowStep>({ num: '01', label: 'Propose', description: 'Test description' });
  showConnector = signal(true);
}

describe('HowStepComponent', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render step number and label', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.how-num')?.textContent).toBe('01');
    expect(el.querySelector('.how-label')?.textContent).toBe('Propose');
  });

  it('should render description', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.how-desc')?.textContent).toBe('Test description');
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
