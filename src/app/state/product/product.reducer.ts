import {IProduct} from "../../shared/model/product.interface";
import {createReducer, on} from "@ngrx/store";
import {loadProduct, loadProductFailure, loadProductSuccess} from "./product.action";

export interface IProductState {
  products: IProduct[],
  error: string | null
}

const initialProductState: IProductState = {
  products: [],
  error: null,
}

export const productReducer = createReducer(
  initialProductState,
  on(loadProduct, (state) => {
    return {
      ...state,
    }
  }),
  on(loadProductSuccess, (state, {products}) => {
    return {
      ...state,
      products,
    }
  }),
  on(loadProductFailure, (state, {errorMessage}) => {
    return {
      ...state,
      error: errorMessage,
    }
  })
)
