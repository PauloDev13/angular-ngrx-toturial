import {Component, EventEmitter, input, Output} from '@angular/core';
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
  @Output() handleAddToCart: EventEmitter<IProduct> = new EventEmitter;
  product = input.required<IProduct>();

  add(product: IProduct) {
    this.handleAddToCart.emit(product);
  }
}
