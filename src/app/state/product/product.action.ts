import {createAction, props} from "@ngrx/store";
import {IProduct} from "../../shared/model/product.interface";

const LOAD_PRODUCT = '[Product] Load product';
const LOAD_PRODUCT_SUCCESS = '[Product] Load product success';
const LOAD_PRODUCT_FAILURE = '[Product] Load product failure';

export const loadProduct = createAction(LOAD_PRODUCT);
export const loadProductSuccess =
  createAction(LOAD_PRODUCT_SUCCESS, props<{ products: IProduct[]}>());
export const loadProductFailure =
  createAction(LOAD_PRODUCT_FAILURE, props<{ errorMessage: string}>());
