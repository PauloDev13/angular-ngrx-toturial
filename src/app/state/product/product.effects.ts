import {inject, Injectable} from "@angular/core";
import {ProductApiService} from "../../shared/service/product-api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadProduct, loadProductFailure, loadProductSuccess} from "./product.action";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class ProductEffects {
  private apiService = inject(ProductApiService);
  private action$ = inject(Actions);

  loadProducts$ = createEffect(
    () => this.action$
      .pipe(ofType(loadProduct),
        switchMap(() => this.apiService.getProducts()
          .pipe(
            map((resp) => loadProductSuccess({ products: resp })),
            catchError((error: { message: string }) => of(
                loadProductFailure({ errorMessage: 'Falha ao carregar produtos'})
              )
            )
          )
        )
      )
  );

}
