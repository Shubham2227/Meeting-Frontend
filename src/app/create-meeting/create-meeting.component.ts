import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router : Router, private meetingService : MeetingService) { }
  meetingForm : FormGroup;
  ngOnInit(): void {
    this.meetingForm = this.formBuilder.group( {
        title : ['', Validators.required],
        date : ['', Validators.required]
    });
  }

  createMeeting() {
    if(this.meetingForm.invalid){
      return;
    }
    this.meetingService.createMeeting(this.meetingForm.value)
                       .subscribe(data => {
                         console.log(data);
                          this.router.navigate(['view-meetings'])
                       },err => console.log(err));
  }
}
