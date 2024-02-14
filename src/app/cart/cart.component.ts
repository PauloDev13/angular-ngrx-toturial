import {Component, inject} from '@angular/core';
import {AsyncPipe, CurrencyPipe, JsonPipe} from "@angular/common";
import {CartStore} from "../store/cart.store";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartStore = inject(CartStore);
  protected cartItems = this.cartStore.products;
  protected totalPrice = this.cartStore.totalPrice;

  protected removeProduct(productId: number) {
    this.cartStore.removeProduct(productId);
  }

  protected incrementProduct(productId: number) {
    this.cartStore.incrementProduct(productId);
  }

  protected decrementProduct(productId: number, quantity: number) {
    if (quantity <= 1) {
      this.removeProduct(productId);
    } else {
      this.cartStore.decrementProduct(productId);
    }
  }
}
