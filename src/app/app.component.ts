import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NgPassOtpModule } from './shared/lib/ng-pass-otp/ng-pass-otp.module';
import { OTPVerificationComponent } from './shared/lib/otp/otp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemsComponent, FormsModule, NgPassOtpModule, OTPVerificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = signal('signals');

  items = [1, 2, 3, 4, 5, 6, 8]
  itemSize = computed(() => this.items.length)

  itemsSignal = signal([1, 2, 3, 4, 5, 6, 8])
  itemsSignalSize = computed(() => this.itemsSignal().length)


  constructor() {
    effect(() => {
      console.log(this.title(), "changed")
    })
  }



}
