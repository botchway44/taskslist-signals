import { Component, computed, model } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [ListItemComponent,],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {

  items = model<number[]>([])
  itemsSignal = model<number[]>([])

  itemsLength = computed(() => this.items().length)
  constructor() {
    console.log("MODEL", this.items())
  }

  reset() {
    this.items.set([])
  }

  resetSignal() {
    this.itemsSignal.set([])
  }

  removeItem(index: number) {
    const items = this.items()
    items.splice(index, 1)
    this.items.set(items)
  }
  removeItemSignal(index: number) {
    // const items = this.itemsSignal()
    // items.splice(index, 1)
    // this.itemsSignal.set(items)

    // this.itemsSignal.update((items) => {
    //   items.splice(index, 1)
    //   return items
    // })

    this.itemsSignal.update((items) => {
      const newItems = [...items]
      newItems.splice(index, 1)
      return newItems
    })
  }
}
