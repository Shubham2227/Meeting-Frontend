import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateMeetingComponent,
    ViewMeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : () => localStorage.getItem('token'),
        allowedDomains : ['localhost:3000'],
        disallowedRoutes : ['http://localhost:3000/api/user/login', 'http://localhost:3000/api/user/signup']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
