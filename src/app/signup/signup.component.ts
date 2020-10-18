import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router : Router, private meetingService: MeetingService) { }

  signUpForm : FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group( {
        name : [ '', Validators.required],
        username : ['', Validators.compose([Validators.required, Validators.email])],
        password : ['', Validators.required]
    });
  }

  signUp() {
    if(this.signUpForm.invalid) {
      return;
    }
    this.meetingService.signUp(this.signUpForm.value)
                      .subscribe(data => {
                          this.router.navigate(['login']);
                      },err => {
                        console.log(err);
                      })
  }
}
