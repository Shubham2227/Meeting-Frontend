import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'create-meeting', component : CreateMeetingComponent },
  { path : 'view-meetings', component : ViewMeetingsComponent },
  { path : '', pathMatch : 'full', redirectTo : '/login'},
  { path : '**', redirectTo : '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
