import {Component, inject} from '@angular/core';
import {ProductCardComponent} from "../shared/components/product-card/product-card.component";
import {AsyncPipe} from "@angular/common";

import {ProductApiService} from "../shared/service/product-api.service";
import {addToCart} from "../state/cart/cart.action";
import {IProduct} from "../shared/model/product.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";

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
  private productApiService = inject(ProductApiService);
  private store = inject(Store<AppState>);
  products$ = this.productApiService.getProducts();

  addToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }))
  }
}
