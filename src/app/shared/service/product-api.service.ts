import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../model/product.interface";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(
        map((products) => {
          return products.map((product) => {
            return {...product, quantity: 1}
          })
        })
      );
  }
}
