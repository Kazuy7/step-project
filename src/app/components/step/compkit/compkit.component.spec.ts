import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompkitComponent } from './compkit.component';

describe('CompkitComponent', () => {
  let component: CompkitComponent;
  let fixture: ComponentFixture<CompkitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompkitComponent]
    });
    fixture = TestBed.createComponent(CompkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
