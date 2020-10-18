import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meeting } from '../shared/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = 'http://localhost:3000/api/';

  login ( username , password ) {
    return this.http.post(`${this.baseUrl}user/login`, { username , password });
  }

  signUp( data ) {
      return this.http.post(`${this.baseUrl}user/signup`,data);
  }

  createMeeting( data ) {
    return this.http.post(`${this.baseUrl}meeting/new`, data);
  }

  getMeetings() {
    return this.http.get<Meeting[]>(`${this.baseUrl}meeting/get`);
  }

  updateMeeting(data , meetingId) {
      return this.http.put(`${this.baseUrl}meeting/edit/${meetingId}`,data);
  }
}
