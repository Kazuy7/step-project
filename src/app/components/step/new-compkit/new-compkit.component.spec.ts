import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompkitComponent } from './new-compkit.component';

describe('NewCompkitComponent', () => {
  let component: NewCompkitComponent;
  let fixture: ComponentFixture<NewCompkitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompkitComponent]
    });
    fixture = TestBed.createComponent(NewCompkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
