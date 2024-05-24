import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { NgPassOtpModule } from '../ng-pass-otp/ng-pass-otp.module';

@Component({
  standalone: true,
  selector: 'app-otp',
  templateUrl: 'otp.component.html',
  styleUrls: ['./otp.component.scss'],
  imports: [NgPassOtpModule],
  encapsulation: ViewEncapsulation.None,
})
export class OTPVerificationComponent implements OnInit {
  isExpired = false;

  //@ts-ignore
  otpForm: FormGroup;

  otpValue: string = '';

  config = {
    isPasswordInput: true,
    setTypePassword: false,
    allowNumbersOnly: true,
    length: 5,
    inputStyles: {
      width: '55px',
      height: '55px',
      border: '1px solid #838C9D',
      'border-radius': '2px',
      'font-weight': 'bolder',
      color: 'black',
      'font-size': '22px',
    },
  };

  timeReached = false;
  assetUrl = "";

  @Input() authResponse: any = null;

  @Output() authenticateOTP = new EventEmitter<string>();
  @Output() resendOTP = new EventEmitter();

  @Output() back = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  otpChange(otp: any) {
    this.otpValue = otp;
  }

  validateOTP() {
    // navigate to next page
    this.authenticateOTP.emit(this.otpValue);
  }

  timerReached() {
    this.isExpired = true;
  }

  backButton() {
    this.back.emit();
  }

  resendOTPClick() {
    this.resendOTP.emit()
  }
}
