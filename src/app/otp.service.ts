import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private apiUrl = 'http://localhost:5025/api/otp';

  constructor(private http: HttpClient) {}

  sendOtp(phoneNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, { phoneNumber }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  verifyOtp(request: { PhoneNumber: string; Otp: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify`, request, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
