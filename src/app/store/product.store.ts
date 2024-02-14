import {IProduct} from "../shared/model/product.interface";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {inject} from "@angular/core";
import {ProductApiService} from "../shared/service/product-api.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {catchError, EMPTY, pipe, switchMap, take, tap} from "rxjs";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {tapResponse} from "@ngrx/operators";
import {HttpErrorResponse} from "@angular/common/http";


export interface IProductStoreState {
  products: IProduct[],
  error: string | null
}

const initialProductStoreState: IProductStoreState = {
  products: [],
  error: null,
};

export const ProductStore = signalStore(
  {providedIn: 'root'},

  withState(initialProductStoreState),

  withMethods((state) => {
    const productService = inject(ProductApiService);
    return {
      load: rxMethod<void>(
        pipe(
          take(1),
          switchMap(() => productService.getProducts()), tapResponse({
            next: (resp) => {
              patchState(state, {products: resp})
            }, error: (err: HttpErrorResponse) => patchState(
              state, {error: `Error ao buscar produtos. Status: ${err.status}`})
          })
        )
      ),
      loadProducts() {
        toSignal(productService.getProducts()
          .pipe(
            tap((resp) => patchState(state, {products: resp})),
            catchError((err: HttpErrorResponse) => {
                patchState(state, {error: `Error ao buscar produtos. Status: ${err.status}`})
                return EMPTY;
            })
          )
        )
      }
    }
  }),
)
