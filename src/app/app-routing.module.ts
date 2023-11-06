import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/step/new-user/new-user.component';
import { NewSchoolComponent } from './components/school/new-school/new-school.component';
import { SchoolListComponent } from './components/step/school-list/school-list.component';
import { SchoolInfoComponent } from './components/school/school-info/school-info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user/new', component: NewUserComponent },
  { path: 'school/new-school', component: NewSchoolComponent },
  { path: 'school/list', component: SchoolListComponent},
  { path: 'school/:id', component: SchoolInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
