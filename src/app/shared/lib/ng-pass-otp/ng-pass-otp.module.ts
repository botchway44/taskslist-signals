import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgPassOtpComponent } from './ng-pass-otp.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [NgPassOtpComponent, KeysPipe, NumbersOnlyDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgPassOtpComponent],
  providers: [KeysPipe]
})
export class NgPassOtpModule { }
