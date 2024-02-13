import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {selectCartProducts, selectCartTotalPrice} from "../state/cart/cart.selector";
import {AsyncPipe, CurrencyPipe, JsonPipe} from "@angular/common";
import {decrementProduct, incrementProduct, removeProduct} from "../state/cart/cart.action";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private store = inject(Store<AppState>)

  protected cartItems$ = this.store.select(selectCartProducts);
  protected totalPrice$ = this.store.select(selectCartTotalPrice)

  protected removeProduct(productId: number) {
    this.store.dispatch(removeProduct({ productId }));
  }

  protected incrementProduct(productId: number) {
    this.store.dispatch(incrementProduct({ productId }))
  }

  protected decrementProduct(productId: number) {
    this.store.dispatch(decrementProduct({ productId }))
  }
}
