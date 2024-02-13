import {createAction, props} from "@ngrx/store";
import {IProduct} from "../../shared/model/product.interface";

const ADD_TO_CART = '[Cart] Add product to cart';
const INCREMENT_PRODUCT = '[Cart] Increment product the cart';
const DECREMENT_PRODUCT = '[Cart] Decrement product the cart';
const REMOVE_PRODUCT = '[Cart] Remove product the cart';

export const addToCart = createAction(ADD_TO_CART, props<{ product: IProduct }>());
export const incrementProduct = createAction(INCREMENT_PRODUCT, props<{ productId: number }>());
export const decrementProduct = createAction(DECREMENT_PRODUCT, props<{  productId: number }>());
export const removeProduct = createAction(REMOVE_PRODUCT, props<{  productId: number }>());
