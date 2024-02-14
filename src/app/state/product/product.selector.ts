import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IProductState} from "./product.reducer";

const selectProductsFeature =
  createFeatureSelector<IProductState>('product');

export const selectAllProducts =
  createSelector(selectProductsFeature, (state) => state.products)

export const selectProductsError =
  createSelector(selectProductsFeature, (state) => state.error)
