import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetingService } from '../services/meeting.service';
import { Meeting } from '../shared/meeting.model';
declare var $: any;

@Component({
  selector: 'app-view-meetings',
  templateUrl: './view-meetings.component.html',
  styleUrls: ['./view-meetings.component.css']
})
export class ViewMeetingsComponent implements OnInit {

  constructor(private router : Router, private meetingService : MeetingService, private formBuilder: FormBuilder) { }
  meetings : Meeting[] = [];
  editMeetingForm : FormGroup;
  meeting : Meeting;
  meetingId : string  = '';

  ngOnInit(): void {
    this.editMeetingForm = this.formBuilder.group({ 
      title : ['', Validators.required],
      date : ['', Validators.required]
    });
    this.meetingService.getMeetings()
      .subscribe(data => this.meetings = data['meetings'], err=>console.log(err));

  }
 

  openEdit(meetingIndex) {
      this.meeting = this.meetings[meetingIndex];
      this.editMeetingForm.controls['title'].setValue(this.meeting.title);
      this.editMeetingForm.controls['date'].setValue(new Date(this.meeting.date).toISOString().split('Z')[0]);
      this.meetingId = this.meeting._id;
      $('#exampleModal').modal('show');
  }

  editMeeting() {
      $('#exampleModal').modal('hide');
      this.meetingService.updateMeeting(this.editMeetingForm.value, this.meetingId)
        .subscribe(data => { console.log(data); location.reload();}, error => console.log(error));
  }
}
