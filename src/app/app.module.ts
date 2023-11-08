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
// import { AuthInterceptor } from './security/auth.interceptor';

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
