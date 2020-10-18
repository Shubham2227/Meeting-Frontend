import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, 
              private router : Router, 
              private meetingService : MeetingService) { }

  loginForm : FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
        username : ['', [Validators.required, Validators.email]],
        password : ['', Validators.required]
    });
  }

  login() {
    if(this.loginForm.invalid) {
      return;
    }
    this.meetingService
      .login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .subscribe(data => {
                  localStorage.setItem('token', data['token']);
                  this.router.navigate(['view-meetings'])
                }, err => {
                    console.log(err);
                });
  }

}
