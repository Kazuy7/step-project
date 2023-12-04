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
import { ClassroomComponent } from './components/school/classroom/classroom.component';
import { NewClassroomComponent } from './components/school/new-classroom/new-classroom.component';
import { ClassroomInfoComponent } from './components/school/classroom-info/classroom-info.component';
import { TeacherComponent } from './components/school/teacher/teacher.component';
import { NewTeacherComponent } from './components/school/new-teacher/new-teacher.component';
import { ClassroomListComponent } from './components/school/classroom-list/classroom-list.component';
import { EditSchoolComponent } from './components/school/edit-school/edit-school.component';
import { TeacherInfoComponent } from './components/school/teacher-info/teacher-info.component';
import { TeacherListComponent } from './components/school/teacher-list/teacher-list.component';
import { EditClassroomComponent } from './components/school/edit-classroom/edit-classroom.component';
import { KitComponent } from './components/step/kit/kit.component';
import { NewKitComponent } from './components/step/new-kit/new-kit.component';
import { ComponenteComponent } from './components/step/componente/componente.component';
import { NewComponenteComponent } from './components/step/new-componente/new-componente.component';
import { ComponenteListComponent } from './components/step/componente-list/componente-list.component';
import { EditComponenteComponent } from './components/step/edit-componente/edit-componente.component';
import { KitListComponent } from './components/step/kit-list/kit-list.component';
import { NewCompkitComponent } from './components/step/new-compkit/new-compkit.component';
import { CompkitComponent } from './components/step/compkit/compkit.component';

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
    ClassroomComponent,
    NewClassroomComponent,
    ClassroomInfoComponent,
    TeacherComponent,
    NewTeacherComponent,
    ClassroomListComponent,
    EditSchoolComponent,
    TeacherInfoComponent,
    TeacherListComponent,
    EditClassroomComponent,
    KitComponent,
    NewKitComponent,
    ComponenteComponent,
    NewComponenteComponent,
    ComponenteListComponent,
    EditComponenteComponent,
    KitListComponent,
    NewCompkitComponent,
    CompkitComponent,
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
