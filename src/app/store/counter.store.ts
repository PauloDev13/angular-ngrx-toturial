import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {computed} from "@angular/core";

interface ICounterStoreState {
  count: number;
}

export const initialCounterStoreState: ICounterStoreState = {
  count: 0,
}

export const CounterStore = signalStore(
  withState(initialCounterStoreState),
  withMethods(({count, ...store}) =>
    ({
      increment() {
        patchState(store, {count: count() + 1});
      },
      decrement() {
        patchState(store, { count: count() - 1});
      },
      reset() {
        patchState(store, { count: 0});
      }
    })
  ),
  withComputed(({ count}) => ({
    doubleCount: computed(() => count() * 2)
  }))
);

