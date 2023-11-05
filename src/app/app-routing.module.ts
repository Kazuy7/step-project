import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/step/user/user.component';
import { NewUserComponent } from './components/step/new-user/new-user.component';
import { SchoolComponent } from './components/school/school/school.component';
import { NewSchoolComponent } from './components/school/new-school/new-school.component';
import { SchoolListComponent } from './components/step/school-list/school-list.component';
import { SchoolInfoComponent } from './components/school/school-info/school-info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/new', component: NewUserComponent },
  { path: 'school/school', component: SchoolComponent },
  { path: 'school/new-school', component: NewSchoolComponent },
  { path: 'school/list', component: SchoolListComponent},
  { path: 'school/:id', component: SchoolInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
