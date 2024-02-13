import {IProduct} from "../../shared/model/product.interface";
import {createReducer, on} from "@ngrx/store";
import {addToCart, decrementProduct, incrementProduct, removeProduct} from "./cart.action";

export interface CartState {
  products: IProduct[];
  totalPrice: number;
}

export const initialCartState: CartState = {
  products: [],
  totalPrice: 0,
}

export const calculateTotalPrice = (products: IProduct[]) => {
  return products.reduce((total, product) => total + (product.price * product.quantity), 0)
};

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, action) => {
    const updatedProducts = [...state.products, action.product];

    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts)
    };
  }),
  on(incrementProduct,
    (state, action) => {
      const updatedProducts = state.products.map(
        product => product.id === action.productId
          ? {...product, quantity: product.quantity + 1}
          : product
      );

      return {
        ...state,
        products: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts)
      };
    }),
  on(decrementProduct, (state, {productId}) => {
    const updatedProducts = state.products.map(
      product => product.id === productId
        ? {...product, quantity: product.quantity - 1}
        : product
    );

    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts)
    };
  }),
  on(removeProduct,
    (state, action) => {
      const updatedProducts = state.products.filter(
        product => product.id !== action.productId
      );

      return {
        ...state,
        products: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts)
      };
    }),
)
