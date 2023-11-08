import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/step/new-user/new-user.component';
import { NewSchoolComponent } from './components/school/new-school/new-school.component';
import { SchoolListComponent } from './components/step/school-list/school-list.component';
import { SchoolInfoComponent } from './components/school/school-info/school-info.component';
import { HomeStepComponent } from './components/home-step/home-step.component';

const routes: Routes = [
      { path: '', component: HomeStepComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/new', component: NewUserComponent },
      { path: 'school/new', component: NewSchoolComponent },
      { path: 'school/list', component: SchoolListComponent},
      { path: 'school/:id', component: SchoolInfoComponent}
    ];
  // {
  //   path: '',
  //   component: HomeStepComponent,
  //   children: [
  //     { path: '', component: HomeStepComponent },
  //     { path: 'user/new', component: NewUserComponent },
  //     { path: 'school/new-school', component: NewSchoolComponent },
  //     { path: 'school/list', component: SchoolListComponent},
  //     { path: 'school/:id', component: SchoolInfoComponent}
  //   ]
  // },
  // {
  //   path: '',
  //   component: LoginComponent,
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full'},
  //     { path: 'login', component: LoginComponent },
  //   ]
  // }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
