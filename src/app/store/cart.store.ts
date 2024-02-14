import {IProduct} from "../shared/model/product.interface";
import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {computed} from "@angular/core";

interface ICartStoreState {
  products: IProduct[],

}

const initialCartStoreState: ICartStoreState = {
  products: [],
}

const calculateTotalPrice = (products: IProduct[]) => {
  return products.reduce((total, product) => total + (product.price * product.quantity), 0)
};

export const CartStore = signalStore(
  {providedIn: 'root'},

  withState(initialCartStoreState),

  withComputed((state) => {
    return {
      totalPrice: computed(() => calculateTotalPrice(state.products())),
    }
  }),

  withComputed((state) => {
    return {
      countProductsInCart: computed(() => state.products().length),
    }
  }),

  withMethods((state) => {
    return {
      addToCart(product: IProduct) {
        const updatedProducts = [...state.products(), product];

        patchState(state, {products: updatedProducts});
      },

      incrementProduct(productId: number) {
        const updatedProducts = state.products().map((
          prod) => prod.id === productId
          ? {...prod, quantity: prod.quantity + 1}
          : prod
        );
        patchState(state, {products: updatedProducts})
      },

      decrementProduct(productId: number) {
        const updatedProducts = state.products().map((
          prod) => prod.id === productId
          ? {...prod, quantity: prod.quantity - 1}
          : prod
        );
        patchState(state, {products: updatedProducts})
      },

      removeProduct(productId: number) {
        const updatedProducts = state.products()
          .filter((prod) => prod.id !== productId
          );
        patchState(state, {products: updatedProducts})
      }
    }
  }),
);
