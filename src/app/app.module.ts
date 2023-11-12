import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SchoolInfoComponent } from './components/school/school-info/school-info.component';
import { UserComponent } from './components/step/user/user.component';
import { NewUserComponent } from './components/step/new-user/new-user.component';
import { SchoolListComponent } from './components/step/school-list/school-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesComponent } from './components/messages/messages.component';
import { SchoolComponent } from './components/school/school/school.component';
import { NewSchoolComponent } from './components/school/new-school/new-school.component';
import { HomeStepComponent } from './components/home-step/home-step.component';
import { HomeSchoolComponent } from './components/home-school/home-school.component';
import { ClassroomComponent } from './components/school/classroom/classroom.component';
import { NewClassroomComponent } from './components/school/new-classroom/new-classroom.component';
import { ClassroomInfoComponent } from './components/school/classroom-info/classroom-info.component';
import { TeacherComponent } from './components/school/teacher/teacher.component';
import { NewTeacherComponent } from './components/school/new-teacher/new-teacher.component';
import { ClassroomListComponent } from './components/school/classroom-list/classroom-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SchoolInfoComponent,
    UserComponent,
    NewUserComponent,
    SchoolListComponent,
    MessagesComponent,
    SchoolComponent,
    NewSchoolComponent,
    HomeStepComponent,
    HomeSchoolComponent,
    ClassroomComponent,
    NewClassroomComponent,
    ClassroomInfoComponent,
    TeacherComponent,
    NewTeacherComponent,
    ClassroomListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
