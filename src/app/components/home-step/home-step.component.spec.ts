import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStepComponent } from './home-step.component';

describe('HomeStepComponent', () => {
  let component: HomeStepComponent;
  let fixture: ComponentFixture<HomeStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStepComponent]
    });
    fixture = TestBed.createComponent(HomeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
