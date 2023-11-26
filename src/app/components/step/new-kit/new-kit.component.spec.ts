import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKitComponent } from './new-kit.component';

describe('NewKitComponent', () => {
  let component: NewKitComponent;
  let fixture: ComponentFixture<NewKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewKitComponent]
    });
    fixture = TestBed.createComponent(NewKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
