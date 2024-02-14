import {CounterState} from "./counter/counter.reducer";
import {CartState} from "./cart/cart.reducer";
import {IProductState} from "./product/product.reducer";

export interface AppState {
  counter: CounterState,
  cart: CartState,
  product: IProductState,
}
