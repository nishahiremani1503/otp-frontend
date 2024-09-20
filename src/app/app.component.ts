import { Component } from '@angular/core';
import { OtpService } from './otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phoneNumber: number | null = null;
  otp: string = '';
  otpSent: boolean = false;

  constructor(private otpService: OtpService) { }

  sendOtp() {
    if (this.phoneNumber !== null) {
      this.otpService.sendOtp(this.phoneNumber.toString()).subscribe(response => {
        alert('OTP sent successfully!');
        this.otpSent = true;
      }, error => {
        console.error('Error sending OTP:', error);
        alert('Error sending OTP');
      });
    } else {
      alert('Please enter a valid phone number.');
    }
  }

  validatePhoneNumber() {
    if (this.phoneNumber && this.phoneNumber.toString().length > 10) {
      this.phoneNumber = Number(this.phoneNumber.toString().slice(0, 10));
    }
  }

  verifyOtp() {
    if (this.phoneNumber !== null) {
      const request = { PhoneNumber: this.phoneNumber.toString(), Otp: this.otp }; // Convert to string
      this.otpService.verifyOtp(request).subscribe(response => {
        alert('OTP verified successfully!');
      }, error => {
        alert('Error verifying OTP');
      });
    } else {
      alert('Please enter a valid phone number before verification.');
    }
  }
}
