import {Component, inject} from '@angular/core';
import {ProductCardComponent} from "../shared/components/product-card/product-card.component";
import {AsyncPipe} from "@angular/common";

import {IProduct} from "../shared/model/product.interface";
import {CartStore} from "../store/cart.store";
import {ProductStore} from "../store/product.store";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private cartStore = inject(CartStore);
  private productStore = inject(ProductStore);

  protected products = this.productStore.products;
  protected error = this.productStore.error;

  addToCart(product: IProduct) {
    this.cartStore.addToCart(product);
  }
}
