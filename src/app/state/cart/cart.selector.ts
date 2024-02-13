import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCartState,
  (state) => state.products
)

export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state) => state.totalPrice
)
