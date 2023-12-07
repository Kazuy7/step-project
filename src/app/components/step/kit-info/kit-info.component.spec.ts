import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitInfoComponent } from './kit-info.component';

describe('KitInfoComponent', () => {
  let component: KitInfoComponent;
  let fixture: ComponentFixture<KitInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitInfoComponent]
    });
    fixture = TestBed.createComponent(KitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
