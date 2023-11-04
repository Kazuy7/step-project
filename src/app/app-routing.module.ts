import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/step/user/user.component';
import { NewUserComponent } from './components/step/new-user/new-user.component';
import { RegisterComponent } from './components/school/register/register.component';
import { NewRegisterComponent } from './components/school/new-register/new-register.component';
import { SchoolListComponent } from './components/step/school-list/school-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/new', component: NewUserComponent },
  { path: 'school/register', component: RegisterComponent },
  { path: 'school/new-register', component: NewRegisterComponent },
  { path: 'school/list', component: SchoolListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
