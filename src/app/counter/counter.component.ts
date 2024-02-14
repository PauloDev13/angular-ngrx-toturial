import {Component, computed, signal} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {selectCount} from "../state/counter/counter.selector";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;
  count = signal(0);
  double = computed(() => this.count() * 2)

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCount);
  }

  increment() {
    this.count.update(num => num + 1);
  }

  decrement() {
    this.count.update(num => num -  1);
  }

  reset() {
    this.count.set(0);
  }

}
