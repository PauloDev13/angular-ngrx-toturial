import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../../model/product.interface";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: IProduct
  @Output() handleAddToCart: EventEmitter<IProduct> = new EventEmitter;

  add(product: IProduct) {
    this.handleAddToCart.emit(product);
  }
}
