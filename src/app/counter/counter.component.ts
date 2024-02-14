import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CounterStore} from "../store/counter.store";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  providers: [CounterStore],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  protected counterStore = inject(CounterStore);
  protected count = this.counterStore.count;
  protected doubleCount = this.counterStore.doubleCount;

  protected increment() {
    this.counterStore.increment();
  }

  protected decrement() {
    this.counterStore.decrement();
  }

  protected reset() {
    this.counterStore.reset();
  }

}
