import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomInfoComponent } from './classroom-info.component';

describe('ClassroomInfoComponent', () => {
  let component: ClassroomInfoComponent;
  let fixture: ComponentFixture<ClassroomInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomInfoComponent]
    });
    fixture = TestBed.createComponent(ClassroomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
