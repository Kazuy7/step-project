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

const routes: Routes = [
      { path: '', component: HomeStepComponent },
      { path: 'home-school', component: HomeSchoolComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/new', component: NewUserComponent },
      { path: 'school/new', component: NewSchoolComponent },
      // { path: 'classroom/new', component: NewClassroomComponent },
      { path: 'school/list', component: SchoolListComponent},
      { path: 'school/:id', component: SchoolInfoComponent},
      { path: 'school/:id/classroom/new', component: NewClassroomComponent },
      { path: 'school/:id/classroom/list', component: ClassroomListComponent},
      { path: 'school/:id/classroom/:id', component: ClassroomInfoComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
