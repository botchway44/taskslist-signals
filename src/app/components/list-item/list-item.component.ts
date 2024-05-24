import { Component, computed, input, model, output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  item = input<number>()
  delete = output()
  constructor() {
  }

  remove() {
    this.delete.emit()
  }
}
