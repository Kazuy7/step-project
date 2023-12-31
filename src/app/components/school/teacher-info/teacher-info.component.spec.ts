import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInfoComponent } from './teacher-info.component';

describe('TeacherInfoComponent', () => {
  let component: TeacherInfoComponent;
  let fixture: ComponentFixture<TeacherInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherInfoComponent]
    });
    fixture = TestBed.createComponent(TeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
