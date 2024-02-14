import {Component, inject} from '@angular/core';
import {ProductCardComponent} from "../shared/components/product-card/product-card.component";
import {AsyncPipe} from "@angular/common";

import {addToCart} from "../state/cart/cart.action";
import {IProduct} from "../shared/model/product.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {Observable} from "rxjs";
import {loadProduct} from "../state/product/product.action";
import {selectAllProducts, selectProductsError} from "../state/product/product.selector";

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
  private store = inject(Store<AppState>);
  products$!: Observable<IProduct[]>
  error$!: Observable<string | null>

  constructor() {
    this.store.dispatch(loadProduct());
    this.products$ = this.store.select(selectAllProducts);
    this.error$ = this.store.select(selectProductsError);
  }

  addToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }))
  }
}
