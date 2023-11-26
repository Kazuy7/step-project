import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponenteComponent } from './edit-componente.component';

describe('EditComponenteComponent', () => {
  let component: EditComponenteComponent;
  let fixture: ComponentFixture<EditComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponenteComponent]
    });
    fixture = TestBed.createComponent(EditComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
