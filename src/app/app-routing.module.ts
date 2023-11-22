import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/step/new-user/new-user.component';
import { NewSchoolComponent } from './components/school/new-school/new-school.component';
import { SchoolListComponent } from './components/step/school-list/school-list.component';
import { SchoolInfoComponent } from './components/school/school-info/school-info.component';
import { HomeStepComponent } from './components/home-step/home-step.component';
import { NewClassroomComponent } from './components/school/new-classroom/new-classroom.component';
import { ClassroomInfoComponent } from './components/school/classroom-info/classroom-info.component';
import { ClassroomListComponent } from './components/school/classroom-list/classroom-list.component';
import { HomeSchoolComponent } from './components/home-school/home-school.component';
import { NewTeacherComponent } from './components/school/new-teacher/new-teacher.component';
import { EditSchoolComponent } from './components/school/edit-school/edit-school.component';
import { TeacherInfoComponent } from './components/school/teacher-info/teacher-info.component';
import { TeacherListComponent } from './components/school/teacher-list/teacher-list.component';
import { EditClassroomComponent } from './components/school/edit-classroom/edit-classroom.component';

const routes: Routes = [
      { path: '', component: HomeStepComponent },
      { path: 'home-school', component: HomeSchoolComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/new', component: NewUserComponent },
      { path: 'school/new', component: NewSchoolComponent },
      { path: 'classroom/new', component: NewClassroomComponent },
      { path: 'school/list', component: SchoolListComponent},
      { path: 'school/edit/:id', component: EditSchoolComponent},
      { path: 'classroom/edit/:id', component: EditClassroomComponent},
      { path: 'school/:id', component: SchoolInfoComponent},
      { path: 'school/:id/classroom/new', component: NewClassroomComponent },
      { path: 'school/:id/classroom/list', component: ClassroomListComponent},
      { path: 'school/:id/classroom/:id', component: ClassroomInfoComponent},
      { path: 'school/:id/teacher/new', component: NewTeacherComponent },
      { path: 'school/:id/teacher/list', component: TeacherListComponent },
      { path: 'school/:id/teacher/:id', component: TeacherInfoComponent },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
