import {CounterState} from "./counter/counter.reducer";
import {CartState} from "./cart/cart.reducer";

export interface AppState {
  counter: CounterState
  cart: CartState
}
